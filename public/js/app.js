const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http){
  this.h1 = 'Playlist App'
  this.playlist = ''
  this.playlists = []

  this.createForm = {}
  this.createPlaylist = () => {
    $http({
      method: 'POST',
      url: '/playlists',
      data: this.createForm
    }).then(response => {
      console.log(response.data);
      this.playlists.unshift(response.data);
      this.createForm = {}
    }, error => {
      console.log(error);
    })
  }

  this.getPlaylist = () => {
    $http({
      method: 'GET',
      url: '/playlists',
    }).then(response => {
      console.log(response.data);
      this.playlists = response.data
      this.playlist = this.playlists[0]
    }, error => {
      console.log(error);
    })
  }

  this.deletePlaylist = (id) => {
    $http({
      method: 'DELETE',
      url: '/playlist/' + id
    }).then(response => {
      console.log(response.data);
      const removeByIndex = this.playlists.findIndex(playlist => playlist._id === id)
      this.playlists.splice(removeByIndex, 1)
    }, error => {
      console.log(error);
    })
  }

  this.updatePlaylist = () => {
    $http({
      method: 'PUT',
      url: '/playlist/' + playlist._id,
      // data: {
      //   tracks: [{
      //     title: this.title,
      //     artist: this.artist,
      //     album: this.album,
      //     genre: this.genre
      //   }],
      //   description: this.description,
      //   likes: {this.likes},
      //   tags: [{this.tags}],
      //   creator: this.creator
      //
      // }
    }).then(response => {
      console.log(response.data);
      this.getPlaylist();
    }, error => {
      console.log(error);
    })
  }

  this.createUser = () => {
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(response => {
      console.log(response);
    })
  }

  this.logIn = () => {
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(response => {
      console.log(response);
      this.loggedInUser();
    })
  }

  this.loggedInUser = () => {
    $http({
      method: 'GET',
      url: '/log'
    }).then(response => {
      this.loggedIn = response.data.username
    })
  }
  this.getPlaylist();
}]);
