import React from 'react';
import { Button, Header, Image, Modal, Divider } from 'semantic-ui-react';

import AnimatedBox from './AnimatedBox';

const ModalWithAnimation = () => (
  <Modal trigger={<Button>Show Modal</Button>} centered={false}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
    <Divider section />
    <div>
      <AnimatedBox />
      <Divider section />
      <Button>Click Here</Button>
    </div>
  </Modal>
)

export default ModalWithAnimation;