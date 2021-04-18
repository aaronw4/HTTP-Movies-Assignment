(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r),o=(a(39),a(32)),s=a(33),l=a(12),m=a(7),u=a(8),v=a(10),d=a(9),h=a(11),p=a(6),E=function(e){function t(e){return Object(m.a)(this,t),Object(v.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"saved-list"},c.a.createElement("h3",null,"Saved Movies:"),this.props.list.map(function(e){return c.a.createElement(p.c,{to:"/movies/".concat(e.id),key:e.id,activeClassName:"saved-active"},c.a.createElement("span",{className:"saved-movie"},e.title))}),c.a.createElement("div",{className:"home-button"},c.a.createElement(p.b,{to:"/"},"Home")))}}]),t}(n.Component),f=a(13),b=a.n(f),j=function(e){var t=e.movie,a=t.title,n=t.director,r=t.metascore,i=t.stars;return c.a.createElement("div",{className:"movie-card"},c.a.createElement("h2",null,a),c.a.createElement("div",{className:"movie-director"},"Director: ",c.a.createElement("em",null,n)),c.a.createElement("div",{className:"movie-metascore"},"Metascore: ",c.a.createElement("strong",null,r)),c.a.createElement("h3",null,"Actors"),i.map(function(e){return c.a.createElement("div",{key:e,className:"movie-star"},e)}),c.a.createElement("div",null,c.a.createElement(p.b,{to:"/update-movie/".concat(e.movie.id)},c.a.createElement("button",{className:"edit-button"},"Edit"))))},O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).state={movies:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/movies").then(function(t){return e.setState({movies:t.data})}).catch(function(e){return console.log(e.response)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"movie-list"},this.state.movies.map(function(e){return c.a.createElement(g,{key:e.id,movie:e})}))}}]),t}(n.Component);function g(e){var t=e.movie;return c.a.createElement(p.b,{to:"/movies/".concat(t.id)},c.a.createElement(j,{movie:t}))}var S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).fetchMovie=function(e){b.a.get("http://localhost:5000/api/movies/".concat(e)).then(function(e){return a.setState({movie:e.data})}).catch(function(e){return console.log(e.response)})},a.saveMovie=function(){(0,a.props.addToSavedList)(a.state.movie)},a.state={movie:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchMovie(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){this.props.match.params.id!==e.match.params.id&&this.fetchMovie(e.match.params.id)}},{key:"render",value:function(){return this.state.movie?c.a.createElement("div",{className:"save-wrapper"},c.a.createElement(j,{movie:this.state.movie}),c.a.createElement("div",{className:"save-button",onClick:this.saveMovie},"Save")):c.a.createElement("div",null,"Loading movie information...")}}]),t}(c.a.Component),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).handleTitle=function(e){a.setState({title:e.target.value})},a.handleDirector=function(e){a.setState({director:e.target.value})},a.handleMetascore=function(e){a.setState({metascore:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),b.a.put("http://localhost:5000/api/movies/".concat(a.props.match.params.id),{id:a.props.match.params.id,title:a.state.title,director:a.state.director,metascore:a.state.metascore,stars:a.state.stars}).then(window.location.replace("/movies/".concat(a.props.match.params.id))).catch(function(e){return console.log(e)})},a.state={movie:null,title:"",director:"",metascore:null,stars:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/movies/".concat(this.props.match.params.id)).then(function(t){e.setState({movie:t.data}),e.setState({title:t.data.title}),e.setState({director:t.data.director}),e.setState({metascore:t.data.metascore}),e.setState({stars:t.data.stars})}).catch(function(e){return console.log(e.response)})}},{key:"render",value:function(){return console.log(this.state.stars),this.state.movie?c.a.createElement("div",null,c.a.createElement("h1",null,"Edit Movie Information"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("span",null,"Title: "),c.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleTitle}),c.a.createElement("br",null),c.a.createElement("span",null,"Director: "),c.a.createElement("input",{type:"text",name:"director",value:this.state.director,onChange:this.handleDirector}),c.a.createElement("br",null),c.a.createElement("span",null,"Metascore: "),c.a.createElement("input",{type:"text",name:"metascore",value:this.state.metascore,onChange:this.handleMetascore}),c.a.createElement("div",null,c.a.createElement("button",null,"Submit")))):c.a.createElement("div",null,"Loading....")}}]),t}(c.a.Component),k=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],i=function(e){r([].concat(Object(o.a)(a),[e]))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{list:a}),c.a.createElement(l.a,{exact:!0,path:"/",component:O}),c.a.createElement(l.a,{path:"/movies/:id",render:function(e){return c.a.createElement(S,Object.assign({},e,{addToSavedList:i}))}}),c.a.createElement(l.a,{path:"/update-movie/:id",render:function(e){return c.a.createElement(y,e)}}))};i.a.render(c.a.createElement(p.a,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b5c03f16.chunk.js.map