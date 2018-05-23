import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { Icon } from 'semantic-ui-react';

export class Footer extends Component {
  state = { modalIsOpen: false };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  // afterOpenModal = () => {
  //   this.subtitle.style.color = '#f00';
  // };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="footer">
        <span className="footerItem footerLeft"> &copy; 러시앤코드 </span>
        <span className="footerRight">
          <NavLink to="/clause" className="footerItem" activeClassName="active">
            이용약관
          </NavLink>
          <NavLink to="/information" className="footerItem" activeClassName="active">
            개인정보보호
          </NavLink>
          <span>
            <button className="helpdesk-btn-open" onClick={this.openModal}>
              헬프데스크
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              className="helpdesk-modal"
            >
              <div className="helpdesk-container">
                <div className="helpdesk-title">
                    <h1>HELP DESK</h1>
                </div>
                <div className="helpdesk-body">
                  <div className="helpdesk-body-item">
                    <Icon name="mail" size="big" />
                    <h3>rushncode @ gmail.com</h3>
                  </div>
                  <div className="helpdesk-body-word">
                    <h3>
                      러시앤코드는 언제나 여러분의 의견을 환영합니다.<br />제안하고 싶은 내용이나
                      궁금한 점이 있으면 메일을 보내주세요.<br />빠른 시일내에 답변 드리도록
                      하겠습니다.
                    </h3>
                  </div>
                </div>
                <button className="helpdesk-btn-close" onClick={this.closeModal}>
                  닫기
                </button>
              </div>
            </Modal>
          </span>
        </span>
      </div>
    );
  }
}

export default Footer;
