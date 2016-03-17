var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
	 thumbnailData: [{
      title: 'Inbo',
      number: 132,
      header: 'Learn React',
      description: 'React is fantastic new library for making fast, dynamic pages.',
      imageURL: 'http://formatjs.io/img/react.svg'
    },
    {
      title: 'Inbo',
      number: 19999,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow. ',
      imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
    },
    {
      title: 'Inbo',
      number: 19999,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow. ',
      imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
    }]

};

{/*options = {thumbnailData: [ {}, {}, {} ]}*/}

//React, please
	var element = React.createElement(ThumbnailList, options);//en stk pepperkake

	React.render(element ,document.querySelector('.target'));