import "babel-polyfill";
import Webim from "&/webim";
import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

//主面板组件测试
describe("Webim 组件测试用例", () => {
  it("通过props来控制mainPanel的显示隐藏，区别：class名有close", () => {
    let MainPanelS = mount(<Webim mainPanelState={false} />);
    expect(MainPanelS.find(".webim").hasClass("close")).toEqual(true);
    MainPanelS.setProps({ mainPanelState: true });
    expect(MainPanelS.find(".webim").hasClass("open")).toEqual(true);
  });
});

// /***
//  * jest FAQ
//  * shallow方法返回App的浅渲染
//  *
//  * 问题：
//  * 1. TypeError: Cannot read property 'equal' of undefined  ： expect.toEqual
//  * 2. childAt(index)
//  * 3. simulate   Even though the name would imply this simulates an actual event, .simulate()                      will in fact target the component's prop based on the event you give it.                          For example, .simulate('click') will actually get the onClick prop and call it.
//  * 4. hasClass
//  * 5. expect VS chai ?
//  * 6. prop() undefined ?  NOTE: When called on a shallow wrapper, .props() will return values for                           props on the root node that the component renders, not the component                              itself. To return the props for the entire React component, use                                   wrapper.instance().props. See .instance() => ReactComponent
//  * 7.如何获取input的value  ？find('input').props().value 其实就是访问ReactElement上的props属性  <input value = '123'/>
//  * 8.containsAnyMatchingElements
//  * 9.length  可以么
//  * 10。如何测试组件是否展示完整的信息  ？   类名判断？
//  *

//  * **/
