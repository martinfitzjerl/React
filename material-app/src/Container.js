import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';

class Example extends React.Component {
	  render() {
		      return (
			            <Container fluid={true}>
			              {/*

				              Container is centered on page with 15px of
					              padding on either side. The inner width is
						              fluid for all viewport widths.

							              */}
			            </Container>
			          );
		    }
}

ReactDOM.render(<Example />, document.getElementById('example'));
