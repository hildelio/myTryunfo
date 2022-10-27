import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: '',
    // hasTrunfo,
    isSaveButtonDisabled: true,
  };

  validateButtonFilled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const MIN = 0;
    const MAX = 90;
    const MAX_SUM = 210;
    const isFilled = cardName && cardDescription && cardImage && cardRare;
    const attr1 = cardAttr1 <= MAX && cardAttr1 >= MIN;
    const attr2 = cardAttr2 <= MAX && cardAttr2 >= MIN;
    const attr3 = cardAttr3 <= MAX && cardAttr3 >= MIN;
    const maxSum = Math.round(cardAttr1)
    + Math.round(cardAttr2)
    + Math.round(cardAttr3) <= MAX_SUM;
    this.setState({
      isSaveButtonDisabled: !isFilled || !attr1 || !attr2 || !attr3 || !maxSum,
    });
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      this.validateButtonFilled();
    });
  };

  onSaveButtonClick = () => {
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
      // hasTrunfo,
      isSaveButtonDisabled: true,
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
