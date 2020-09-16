/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
        docUrl(doc) {
                const baseUrl = this.props.config.baseUrl;
                const docsUrl = this.props.config.docsUrl;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="social">
          <a href={"https://www.linkedin.com/in/" + this.props.config.socialMedia.linkedin} target="_blank" className="social">
            <img alt="LinkedIn" src={this.props.config.baseUrl + "img/linkedin.svg"}></img>
          </a>
          <a href={"https://twitter.com/" + this.props.config.socialMedia.twitter} target="_blank" className="social">
            <img alt="Twitter" src={this.props.config.baseUrl + "img/twitter.svg"}></img>
          </a>
          <a href={"https://github.com/" + this.props.config.socialMedia.github} target="_blank" className="social">
            <img alt="GitHub" src={this.props.config.baseUrl + "img/github.svg"}></img>
          </a>
        </section>
        <section className="copyright">{this.props.config.copyright}. Created with Docusaurus.</section>
      </footer>
    );
  }
}

module.exports = Footer;