'use strict';
var React = require('react')
  , Default = require('../default.jsx')
  , EditableExample = require('../EditableExample')
  , DDButton = require('../../bootstrap').DropdownButton
  , MenuItem = require('../ApiMenuItem.jsx')
  , PropHeader = require('../PropHeader.jsx')
  , MultiselectExample = require('../demos/Multiselect.jsx');

var prefix = 'multiselect/';
var widgetName = 'Multiselect'
var Multiselect = React.createClass({

  mixins: [ require('../PageMixin')(prefix) ],
  
  render: function() {
    return (
      <section {...this.props}>
        <h1 className="page-header">
          Multiselect
          <span className='pull-right'>
            <DDButton title='props' bsStyle='link' pullRight={true}>
              <MenuItem>value</MenuItem>
              <MenuItem>onChange</MenuItem>
              <MenuItem>onSelect</MenuItem>
              <MenuItem>onCreate</MenuItem>
              <MenuItem>customTags</MenuItem>
              <MenuItem>data</MenuItem>
              <MenuItem divider/>
              <MenuItem>valueField</MenuItem>
              <MenuItem>textField</MenuItem>
              <MenuItem>tagComponent</MenuItem>
              <MenuItem>itemComponent</MenuItem>
              
              <MenuItem>groupComponent</MenuItem>
              <MenuItem>groupBy</MenuItem>

              <MenuItem>placeholder</MenuItem>

              <MenuItem>open</MenuItem>
              <MenuItem>onToggle</MenuItem>

              <MenuItem>busy</MenuItem>
              <MenuItem>disabled</MenuItem>
              <MenuItem>readonly</MenuItem>
              <MenuItem>duration</MenuItem>
              <MenuItem>isRtl</MenuItem>
              <MenuItem>messages</MenuItem>
              <MenuItem divider/>
              <MenuItem>Keyboard Navigation</MenuItem>
            </DDButton>
          </span>
        </h1>
        <p>
          A select listbox alternative
        </p>
        <MultiselectExample/>

        <h2>Props</h2>
        <PropHeader type='Array<Any>' handler="onChange" controllable>value</PropHeader>
        <p>
          The current values of the {widgetName}. The value should can <code>null</code>, or an array
          of <code>valueField</code> values, or an array of objects (such as a few items in the <code>data</code> array)
        </p>
        <EditableExample codeText={require('../examples/value')(widgetName, true)}/>

        <PropHeader type='Function(Array<Any> values)'>onChange</PropHeader>
        <p>
          change event Handler that is called when the value is changed. The handler is called with an array of values
        </p>
        <EditableExample codeText={require('../examples/onChange')(widgetName, true)}/>

        <PropHeader type='Function(Any value)'>onSelect</PropHeader>
        <p>
          This handler fires when an item has been selected from the list. It fires before the <code>onChange</code> handler, and fires 
          regardless of whether the value has actually changed.
        </p>

        <PropHeader type='Function(String searchTerm)'>onCreate</PropHeader>
        <p>
          This handler fires when the user chooses to create a new tag, not in the data list. It is up to the widget parent to implement creation logic, 
          a common implementation is shown below, where the new tag is selected and added to the data list.
        </p>
        <EditableExample codeText={require('../examples/onCreate')(widgetName)}/>

        <PropHeader type='Array'>data</PropHeader>
        <p>
          provide an array of possible values for the {widgetName}. If an array of <code>objects</code> is provided you
          should use the <code>valueField</code> and <code>textField</code> props, to specify which object
          properties comprise the value field (such as an id) and the field used to label the item.
        </p>

        <PropHeader type='String'>valueField</PropHeader>
        <p>
          A property name of a uniquely identifying field in the <code>data</code> array. If no valueField is provided,
          the widget will use strict equality checks to locate the data item, if it exists.
        </p>
        <EditableExample codeText={require('../examples/valueField')(widgetName, true)}/>

        <PropHeader type='String'>textField</PropHeader>
        <p>
          This prop determines which data item field to display in the {widgetName} list andselected item This prop is
          unnecessary when an <code>itemComponent</code> and <code>tagComponent</code> are provided.
        </p>
        <EditableExample codeText={require('../examples/textField')(widgetName, true)}/>

        <PropHeader type='Component'>tagComponent</PropHeader>
        <p>
          This component is used to render each selected item. The default component
          renders the text of the selected item (specified by <code>textfield</code>)
        </p>
        <EditableExample codeText={require('../examples/tagComponent')(widgetName, true)}/>

        <PropHeader type='Component'>itemComponent</PropHeader>
        <p>
          This component is used to render each possible item in the list. The default component
          renders the text of the selected item (specified by <code>textfield</code>)
        </p>
        <EditableExample codeText={require('../examples/itemComponent')(widgetName, true)}/>

        <PropHeader type='String | Function(Any dataItem)'>groupBy</PropHeader>
        <p>
          Determines how to group the {widgetName} dropdown list. Providing a <code>string</code> will group 
          the <code>data</code> array by that property. You can also provide a {'function'} which should return the group value.
        </p>
        <EditableExample codeText={require('../examples/groupby')(widgetName, true)}/>

        <PropHeader type='Component' >groupComponent</PropHeader>
        <p>
          This component is used to render each option group, when <code>groupBy</code> is specified. By 
          default the <code>groupBy</code> value will be used.
        </p>
        <EditableExample codeText={require('../examples/groupComponent')(widgetName, true)}/>

        <PropHeader type='String' handler='onSearch' controllable>placeholder</PropHeader>
        <p>
          The same as an input placeholder, only works in browsers that support the placeholder attribute for inputs
        </p>

        <PropHeader type='String' handler='onSearch' controllable>searchTerm</PropHeader>
        <p>
          The string value of the current search being typed into the {widgetName}. When
          unset (<code>undefined</code>) the {widgetName} will handle the filtering internally.
          The <code>defaultSearchTerm</code> prop can be used to {'set'} an initialization value for uncontrolled widgets.
        </p>

        <PropHeader type='Function(String searchTerm)'>onSearch</PropHeader>
        <p>
          Called when the value of the text box changes either from typing or a pasted value.&nbsp;
          <code>onSearch</code> should be used when the <code>searchTerm</code> prop
          is {'set'}.
        </p>

        <PropHeader type='Boolean'>open</PropHeader>
        <p>
          Whether or not the {widgetName} is open. When unset (<code>undefined</code>) the {widgetName} will handle the
          opening and closing internally. The <code>defaultOpen</code> prop can be used to {'set'} an
          initialization value for uncontrolled widgets.
        </p>
        <EditableExample codeText={require('../examples/open')(widgetName, true)}/>

        <PropHeader type='Function(Boolean isOpen)'>onToggle</PropHeader>
        <p>
          Called when the {widgetName} is about to open or close. <code>onToggle</code> should be used
          when the <code>open</code> prop is {'set'} otherwise the widget will never open or close.
        </p>

        <PropHeader type='Boolean' default="false">busy</PropHeader>
        <p>
          mark whether the widget is in a busy or loading state. If <code>true</code> the widget will display a spinner gif, useful
          when loading data via an ajax call.
        </p>
        <PropHeader type='Number' default="250">duration</PropHeader>
        <p>
          The speed, in milliseconds, of the dropdown animation.
        </p>
        <PropHeader type='[Boolean, Array]'>disabled</PropHeader>
        <p>
          Disable the widget, If an <code>Array</code> of values is passed in only the tags specified will be disabled.
        </p>
        <EditableExample codeText={require('../examples/disabled')(widgetName, 'disabled')}/>

        <PropHeader type='[Boolean, Array]'>readOnly</PropHeader>
        <p>
          Place the widget in a readonly mode, If an <code>Array</code> of values is passed in only the tags specified will be readonly.
        </p>
        <EditableExample codeText={require('../examples/disabled')(widgetName, 'readOnly')}/>

        <PropHeader type='Boolean' default="false">isRtl</PropHeader>
        <p>
          mark whether the widget should render right-to-left. This property can also be implicitly passed to the widget through
           a <code>childContext</code> prop (<code>isRtl</code>) this allows higher level application components to specify the direction.
        </p>

        <PropHeader type='Object'>messages</PropHeader>
        <p>
          Object hash containing display text and/or text for screen readers. Use the <code>messages</code> object to
          localize widget text and increase accessibility.
        </p>

        <h3>messages.createNew <small>String<Default>"(create new tag)"</Default></small></h3>
        <p>
          The text label for creating new tags
        </p>


        <PropHeader type='String' default='"There are no items in this list"'>messages.emptyList</PropHeader>
        <p>
          Text to display when the <code>data</code> prop array is empty
        </p>
        <PropHeader type='String' default='"The filter returned no results"'>messages.emptyFilter</PropHeader>
        <p>
          Text to display when the the current filter does not return any results
        </p>

        <h2 id={ prefix +"keyboard" }>Keyboard Navigation</h2>

        <ul className='list-unstyled keyboard-list'>
          <li><kbd>down arrow</kbd> open dropdown, and move focus to next item</li>
          <li><kbd>up arrow</kbd> move focus to previous item</li>
          <li><kbd>alt + up arrow</kbd> close dropdown</li>

          <li><kbd>left arrow</kbd> move focus to previous selected tag</li>
          <li><kbd>right arrow</kbd> move focus to previous selected tag</li>
          <li><kbd>delete</kbd> unselect focused tag</li>
          <li><kbd>backspace</kbd> remove next selected tag</li>

          <li><kbd>home</kbd> move focus to first item</li>
          <li><kbd>end</kbd> move focus to last item</li>

          <li><kbd>enter</kbd> select focused item</li>
          <li><kbd>ctrl + enter</kbd> create new tag from current search term</li>

          <li><kbd>any key</kbd> search list for item starting with key</li>
        </ul>
      </section>
    );
  }

});

module.exports = Multiselect;