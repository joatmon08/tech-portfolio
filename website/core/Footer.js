/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const { baseUrl, socialMedia } = require('../siteConfig');

class Footer extends React.Component {
        docUrl(doc) {
                const baseUrl = this.props.config.baseUrl;
                const docsUrl = this.props.config.docsUrl;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    let socialMedia = this.props.config.socialMedia;
    return (
      <footer className="nav-footer" id="footer">
        <section className="social">
          {
            Object.keys(socialMedia).map((mediaType) => {
              return (
                <a href={socialMedia[mediaType]} target="_blank" className="social">
                  <img alt={mediaType} src={baseUrl + "img/" + mediaType + ".svg"}></img>
                </a>
              )
            })
          }
        </section>
        <section className="copyright">{this.props.config.copyright} {this.props.config.title}. Created with Docusaurus.</section>
      </footer>
    );
  }
}

module.exports = Footer;