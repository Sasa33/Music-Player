import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

import './carousels.less';

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      initialHeight: 350,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['banner1', 'banner2', 'banner3', 'banner4','banner5','banner6'],
      })
    }, 100)
  }

  render() {
    const heightProp = this.state.initialHeight ? {
      height: this.state.initialHeight,
    } : {};

    return (
      <Carousel
        className="my-carousel"
        autoplay={true}
        infinite={true}
        selectedIndex={0}
        swipeSpeed={500}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {this.state.data.map((ii) => (
          <a
            key={ii}
            href="#"
            style={heightProp}
          >
            <img
              src={`/imgs/${ii || 'banner1'}.jpg`}
              alt="icon"
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ initialHeight: null });
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
}

export default Carousels;