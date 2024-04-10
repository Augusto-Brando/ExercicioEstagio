const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Iniciando Express
const app = express();
app.use(express.json());

// Conexão com o banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Formato do post
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

// Formato do comentário
const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// post - comentários
Post.hasMany(Comment);
Comment.belongsTo(Post);

// Método CRUD

// Criar um post
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

// Receber todos os posts
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

// Adicionar um comentário
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

// Apagar um comentário
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

// Sincronizando banco e iniciando o servidor local na porta 3000
(async () => {
  try {
    await sequelize.sync();
    console.log('Conexão com o banco de dados feita com sucesso.');
    app.listen(3000, () => {
      console.log('Servidor iniciado em http://localhost:3000');
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();
