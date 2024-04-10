const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Inicialização do Express
const app = express();
app.use(express.json());

// Conexão com o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Definição do modelo de Post
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Definição do modelo de Comment
const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Relacionamento entre Post e Comment
Post.hasMany(Comment);
Comment.belongsTo(Post);

// Rotas

// Criar um novo post
app.post('/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o post.' });
  }
});

// Obter todos os posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: Comment });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter os posts.' });
  }
});

// Apagar um post
app.delete('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.destroy({ where: { id: postId } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao apagar o post.' });
  }
});

// Adicionar um comentário a um post
app.post('/posts/:postId/comments', async (req, res) => {
  try {
    const postId = req.params.postId;
    const { content } = req.body;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }
    const comment = await Comment.create({ content, PostId: postId });
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao adicionar o comentário.' });
  }
});

// Apagar um comentário de um post
app.delete('/posts/:postId/comments/:commentId', async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    await Comment.destroy({ where: { id: commentId, PostId: postId } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao apagar o comentário.' });
  }
});

// Sincronização do modelo com o banco de dados e inicialização do servidor
(async () => {
  try {
    await sequelize.sync();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    app.listen(3000, () => {
      console.log('Servidor iniciado em http://localhost:3000');
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();
