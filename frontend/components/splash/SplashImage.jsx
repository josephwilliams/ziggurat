var React = require('react');

var SplashImage = React.createClass({
  randomPhotoLink: function () {
    // photoLinks from unsplash.com
    var photoLinks = [
      "https://images.unsplash.com/photo-1449960238630-7e720e630019?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=2e62fe094cfdd848dd713e9f03087a1a",
      "https://images.unsplash.com/photo-1438031167650-8d7a8f2ca96e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=83d23f0aa47e875c2a1df38988725b8e",
      "https://images.unsplash.com/12/gladiator.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=6bfaf521f57f2a067ee75e3c0c19566d",
      "https://images.unsplash.com/photo-1444214058525-761aeb793113?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8ce33c21c0aae6cea52bfcf554a9f4eb",
      "https://images.unsplash.com/photo-1438930249256-07387cf30528?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=867be065397a1352dbeea0a60e0417f7",
      "https://images.unsplash.com/photo-1455245737663-3edc3b61dd1a?crop=entropy&dpr=2&fit=crop&fm=jpg&h=850&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450",
      "https://images.unsplash.com/12/palm-trees.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=c68801d882fdd2231a11a56050d57d93",
      "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=16af70cd5a412898fbcd6e80940718d2",
      "https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a877bb72752a01bdc4a0f76f29db3239"
    ];
    var randPhotoLink = photoLinks[Math.floor(Math.random() * photoLinks.length)];
    return (
      randPhotoLink
    );
  },

  startBox: function () {

  },

  render: function () {
    return (
      <div className="splash-image">
        <img
          src="https://40.media.tumblr.com/13ad600b93fac1b5fcd1c282664e452d/tumblr_o6extrWHad1vns4tpo1_1280.png">
        </img>
      </div>
    )
  }
});

module.exports = SplashImage;
