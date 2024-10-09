import React from 'react'

type ImgProps = React.ComponentProps<'img'>;

const defaultStyle: React.CSSProperties = {
  width: '60px',
  height: '60px',
  objectFit: 'cover',
  borderRadius: 'var(--gap-s)',
  marginRight: 'var(--gap)',
};

const Img = ({ src, alt, style }: ImgProps) => {
  return (
    <img src={src} alt={alt} style={{ ...defaultStyle, ...style }} />
  )
}

export default Img;