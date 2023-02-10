// Функции

function getQuntityPostsByAuthor (arr, str) {
  let posts =[];
  let comments =[];

  for (let obj of arr) {
    if (obj.author.toLowerCase() === str.toLowerCase()) {
      posts.push(obj.author);
    }
    if (obj.comments) {
      for (let comment of obj.comments) {
        if (comment.author.toLowerCase() === str.toLowerCase()) {
          comments.push(comment.author);
        }
      }
    }
  }
  console.log('post - ' + posts.length);
  console.log('comments - ' + comments.length);
}

let listOfPosts1 = [
  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov',
    comments: [
      {
          id: 1.1,
          comment: 'some comment1',
          title: 'title 1',
          author: 'Rimus'
      },

      {
          id: 1.2,
          comment: 'some comment2',
          title: 'title 2',
          author: 'Uncle'
      }
    ]
  },

  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Petrov',
    comments: [
      {
          id: 1.1,
          comment: 'some comment1',
          title: 'title 1',
          author: 'Rimus'
      },

      {
          id: 1.2,
          comment: 'some comment2',
          title: 'title 2',
          author: 'Uncle'
      },

      {
          id: 1.3,
          comment: 'some comment3',
          title: 'title 3',
          author: 'Rimus'
      }
    ]
  },

  {
    id: 3,
    post: 'some post3',
    title: 'title 3',
    author: 'Rimus'
  },

  {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle'
  }
]

getQuntityPostsByAuthor (listOfPosts1, 'Rimus')
