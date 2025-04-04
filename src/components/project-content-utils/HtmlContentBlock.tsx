// import React from 'react';

const HtmlContentBlock = ({ html }: { html: string }) => (
  <p dangerouslySetInnerHTML={{ __html: html }} />
);

export default HtmlContentBlock;
