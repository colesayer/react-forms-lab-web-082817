import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })


  }

  render() {
      let poem = this.state.text.split("\n")
      let poemError = <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>

      if(poem.length === 3){
        let line1 = poem[0]
        let line2 = poem[1]
        let line3 = poem[2]
          if(wordCount(line1) === 5 &&
          wordCount(line2) === 3 &&
          wordCount(line3) === 5)
          {
            poemError = ""
          }
      }

      function wordCount(str){
        if(str !== ""){
          return str
            .split(" ")
            .filter(function(n) { return n !== '' })
            .length;
        }
      }


    return (
      <div>
        <textarea
          onChange= {this.handleChange}
          rows="3"
          cols="60"
        />
        {poemError}

      </div>
    );
  }
}

export default PoemWriter;
