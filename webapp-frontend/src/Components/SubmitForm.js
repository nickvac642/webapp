import React from 'react';
import { 
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Row
} from 'reactstrap';

export default class SubmitForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        eboard: 'General Concerns',
        positiveText: '',
        negativeText: '',
        commentsText: '',
        anonymous: false
    }
  }
  submitForm = () => {
    JSON.stringify(this.state, null, ' ');
  }

  handleOnChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleOnCheck = (event) => {
    const {id} = event.target;
    this.setState({[id]: !this.state[id]})
  }


  render() {
    console.warn(this.state)
    return (
      <div>
        <Container>
            <Row>
                <Col sm="12" md={{size: 6, order: 2, offset:3 }}>
                    <Form action="/submit-form" method="POST">
                        <FormGroup>
                            <Label size="lg" for="PositionSelection">Select Position</Label>
                            <Input size="lg" type="select" name="Position" id="eboard" onChange={this.handleOnChange}>
                            <option>General Concerns</option>
                            <option>Chairman</option>
                            <option>Evals</option>
                            <option>Finacial</option>
                            <option>R&D</option>
                            <option>House Imps</option>
                            <option>Opcomm</option>
                            <option>History</option>
                            <option>Social</option>
                            <option>Secretary</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label size="lg" for="whatYouLikeText">What You Like?</Label>
                            <Input type="textarea" name="Positive" id="positiveText" onChange={this.handleOnChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label size="lg" for="whatYouDisLikeText">What You DisLike?</Label>
                            <Input type="textarea" name="Negative" id="negativeText" onChange={this.handleOnChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label size="lg" for="additionalCommentsText">Additional Comments?</Label>
                            <Input type="textarea" name="comments" id="commentsText" onChange={this.handleOnChange}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label size="lg" check>
                            <Input type="checkbox" id="anonymous" onChange={this.handleOnCheck}/>
                            {' '}
                            Submit Form Anonymously
                            </Label>
                        </FormGroup>
                        <Button type="submit" onClick={this.submitForm} color="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>        
      </div>
    );
  }
}
