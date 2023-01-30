"use strict";
var root = document.getElementById("root");
var view = document.getElementById("view");
var viewTwo = document.getElementById("viewTwo");

var Searchbar= React.createClass({
    getInitialState:function(){
        return{

            apiData:"",
            apiTenor:""

        }

    },

    submitHandler: function(e){

        e.preventDefault()
        var enteredData = e.target.Inputtext.value; 
        getAPI2(enteredData).then(data => this.setState({
            apiTenor: data.results
        },() => console.log(data.results)));
        getData(enteredData).then(data => this.setState({
            apiData: data.data
        }, () => this.createCards()));

    },

    createCards(){
        console.log(this.state.data)
        ReactDOM.render(
            <Cards gif={this.state.apiData}/>,
            view
        );
        ReactDOM.render(
            <CardsOtherside gif={this.state.apiTenor}/>,
            viewTwo
        );
    },

    render: function(){
        return(
        <form onSubmit={this.submitHandler}>
            <label for="text"></label>
            <input type="text" name="Inputtext" id="text"/>
            <input type="submit" />
        </form>
        )
    }
})

var CardsOtherside = React.createClass({
    render: function(){
        console.log(this.props.gif)
        return(
            <div className="list">
            {
                this.props.gif.map(function(gif, index) {
                return (
                    <NotCard gif={gif} index={index}/>
                    )
                })
            }
            </div>
        )
    }
})
var NotCard = React.createClass({

    render: function(){
        console.log(this.props.gif);
        return(
                    <div key={this.props.gif.index} className="card">
                    <img src={this.props.gif.itemurl} alt={this.props.gif.id}/>
                    </div>
            )   
    }
})

var Cards = React.createClass({
    render:function(){
        return(
        <div className="cards">
            {
                this.props.gif.map(function(gif, index) {
                return (
                    <Card gif={gif} index={index}/>
                    )
                })
            }
        </div>
        )        
    }
})

var Card = React.createClass({

    render: function(){
        console.log(this.props.gif);
        return(
                    <div key={this.props.gif.index} className="card">
                    <img src={this.props.gif.images.original.url} alt={this.props.gif.id}/>
                    </div>
            )   

    }

})


ReactDOM.render(
    <Searchbar/>,
    root
)






