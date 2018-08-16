import React from 'react';
import { shallow, mount } from 'enzyme';
import SuperButton from '../src/components/Button';

const createTestProps = (customProps = {}) => ({
  label: 'Submit',
  onClick: () => {},
  ...customProps,
});

describe('rendering', () => {
  describe('no type', () => {

  });
});

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = createTestProps();
    wrapper = shallow(<SuperButton {...props} />);
  });
  it('should render a button', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });
  it('should render a label', () => {
    expect(wrapper.find('Button').contains('Submit')).toBe(true);
  });

  describe('no type', () => {
    beforeEach(() => {
      props = createTestProps();
      wrapper = mount(<SuperButton {...props} />);
    });
    it('should have default styles', () => {
      expect(wrapper.find('Button')).toHaveStyleRule('background-color', '#66ccff');
    });
  });

  describe('primary type', () => {
    beforeEach(() => {
      props = createTestProps({ type: 'primary' });
      wrapper = mount(<SuperButton {...props} />);
    });
    it('should have primary styles', () => {
      expect(wrapper.find('Button')).toHaveStyleRule('background-color', '#cc00cc');
    });
  });

  describe('custom style', () => {
    it('should have custom style defined as styled component css', () => {
      props = createTestProps({ customStyle: ['background-color: black;', 'color: red;'] });
      wrapper = mount(<SuperButton {...props} />);
      expect(wrapper.find('Button')).toHaveStyleRule('background-color', 'black');
      expect(wrapper.find('Button')).toHaveStyleRule('color', 'red');
    });
    it('should have custom style defined as js css', () => {
      props = createTestProps({ customStyle: { backgroundColor: 'black' } });
      wrapper = mount(<SuperButton {...props} />);
      expect(wrapper.find('Button')).toHaveStyleRule('background-color', 'black');
    });
  });

  describe('children', () => {
    it('should render children of element type', () => {
      props = createTestProps({ children: (<div>Children</div>) });
      wrapper = shallow(<SuperButton {...props} />);
      expect(wrapper.find('div').contains('Children')).toBe(true);
    });
    it('should render children of string type', () => {
      props = createTestProps({ children: 'Children' });
      wrapper = shallow(<SuperButton {...props} />);
      expect(wrapper.find('Button').contains('Children')).toBe(true);
    });
    it('should render children rather then label', () => {
      props = createTestProps({ children: (<div>Children</div>), label: 'Label' });
      wrapper = shallow(<SuperButton {...props} />);
      expect(wrapper.find('div').contains('Children')).toBe(true);
      expect(wrapper.find('Button').contains('Label')).not.toBe(true);
    });
  });
});

describe('interaction', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = createTestProps({ onClick: jest.fn() });
    wrapper = shallow(<SuperButton {...props} />);
  });
  describe('clicking the button', () => {
    beforeEach(() => {
      wrapper.find('Button').prop('onClick')();
    });
    it('should call  the onClick callback', () => {
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
