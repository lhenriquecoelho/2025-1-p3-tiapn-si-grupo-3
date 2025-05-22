const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Configurar a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL.');
});

// Rota para cadastro de usuário
app.post('/api/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    const query = 'INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)';
    db.query(query, [nome, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
      }
      res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
    });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Rota para login de usuário
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const usuario = results[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    res.status(200).json({ message: 'Login bem-sucedido.' });
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
