import React from 'react';
import { mount } from 'enzyme';
import SuperButton from '../src/components/Button';

describe('SuperButton', () => {
  let props;
  let mountedSuperButton;
  const superButton = () => {
    if (!mountedSuperButton) {
      mountedSuperButton = mount(<SuperButton {...props} />);
    }
    return mountedSuperButton;
  };

  beforeEach(() => {
    props = {
      onClick: undefined,
      label: undefined,
      type: undefined,
      customStyle: undefined,
      children: undefined,
    };
    mountedSuperButton = undefined;
  });

  it('always render Button', () => {
    const Button = superButton().find('Button');
    expect(Button.length).toBe(1);
  });

  // describe('the rendered Button', () => {
  //   it('contains everything else that gets rendered', () => {
  //     const Button = superButton().find('Button');
  //     const wrapper = Button.first();
  //     expect(wrapper.children()).toEqual(superButton().children());
  //   });
  // });
});

// const mockButtonProps = (customProps = {}) => ({
//   label: 'Submit',
//   onClick: () => {},
//   ...customProps,
// });

// describe('Button', () => {
//   noErrorsAllowed();

//   describe('props', () => {
//     it('warns about missing', () => {
//       mount(<SuperButton />);
//       expectMissingProp('onClick', 'SuperButton');
//     });
//   });

//   describe('rendering', () => {
//     let wrapper;
//     let props;
//     beforeEach(() => {
//       props = mockButtonProps();
//       wrapper = shallow(<SuperButton {...props} />);
//     });
//     it('should render a button', () => {
//       expect(wrapper.find('Button')).toHaveLength(1);
//     });
//     it('should render a label', () => {
//       expect(wrapper.find('Button').contains('Submit')).toBe(true);
//     });

//     describe('no type', () => {
//       beforeEach(() => {
//         props = mockButtonProps();
//         wrapper = mount(<SuperButton {...props} />);
//       });
//       it('should have default styles', () => {
//         expect(wrapper.find('Button')).toHaveStyleRule('background-color', '#66ccff');
//       });
//     });

//     describe('primary type', () => {
//       beforeEach(() => {
//         props = mockButtonProps({ type: 'primary' });
//         wrapper = mount(<SuperButton {...props} />);
//       });
//       it('should have primary styles', () => {
//         expect(wrapper.find('Button')).toHaveStyleRule('background-color', '#cc00cc');
//       });
//     });

//     describe('custom style', () => {
//       it('should have custom style defined as styled component css', () => {
//         props = mockButtonProps({ customStyle: ['background-color: black;', 'color: red;'] });
//         wrapper = mount(<SuperButton {...props} />);
//         expect(wrapper.find('Button')).toHaveStyleRule('background-color', 'black');
//         expect(wrapper.find('Button')).toHaveStyleRule('color', 'red');
//       });
//       it('should have custom style defined as js css', () => {
//         props = mockButtonProps({ customStyle: { backgroundColor: 'black' } });
//         wrapper = mount(<SuperButton {...props} />);
//         expect(wrapper.find('Button')).toHaveStyleRule('background-color', 'black');
//       });
//     });

//     describe('children', () => {
//       it('should render children of element type', () => {
//         props = mockButtonProps({ children: (<div>Children</div>) });
//         wrapper = shallow(<SuperButton {...props} />);
//         expect(wrapper.find('div').contains('Children')).toBe(true);
//       });
//       it('should render children of string type', () => {
//         props = mockButtonProps({ children: 'Children' });
//         wrapper = shallow(<SuperButton {...props} />);
//         expect(wrapper.find('Button').contains('Children')).toBe(true);
//       });
//       it('should render children rather then label', () => {
//         props = mockButtonProps({ children: (<div>Children</div>), label: 'Label' });
//         wrapper = shallow(<SuperButton {...props} />);
//         expect(wrapper.find('div').contains('Children')).toBe(true);
//         expect(wrapper.find('Button').contains('Label')).not.toBe(true);
//       });
//     });
//   });

//   describe('interaction', () => {
//     let wrapper;
//     let props;
//     beforeEach(() => {
//       props = mockButtonProps({ onClick: jest.fn() });
//       wrapper = shallow(<SuperButton {...props} />);
//     });
//     describe('clicking the button', () => {
//       beforeEach(() => {
//         wrapper.find('Button').prop('onClick')();
//       });
//       it('should call  the onClick callback', () => {
//         expect(props.onClick).toHaveBeenCalledTimes(1);
//       });
//     });
//   });
// });
