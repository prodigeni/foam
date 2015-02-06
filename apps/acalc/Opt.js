/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function () {
  var usedModels = {
    "Property":true,
    "Model":true,
    "Method":true,
    "Action":true,
    "Constant":true,
    "Message":true,
    "Arg":true,
    "Template":true,
    "Relationship":true,
    "foam.core.bootstrap.ModelFileDAO":true,
    "foam.ui.Window":true,
    "WindowHashValue":true,
    "foam.html.Element":true,
    "Expr":true,
    "Interface":true,
    "AbstractDAO":true,
    "DAOController":true,
    "View":true,
    "foam.patterns.ChildTreeTrait":true,
    "ActionButtonCView2":true,
    "Calc":true,
    "CalcView":true,
    "DetailView":true,
    "HistoryCitationView":true,
    "foam.ui.SlidePanel":true,
    "GestureTarget":true,
    "MainButtonsView":true,
    "SecondaryButtonsView":true,
    "TertiaryButtonsView":true,
    "GestureManager":true,
    "DragGesture":true,
    "Gesture":true,
    "PinchTwistGesture":true,
    "ScrollGesture":true,
    "TapGesture":true,
    "TouchManager":true,
    "foam.graphics.ActionButtonCView":true,
    "foam.graphics.CViewView":true,
    "foam.ui.animated.Label":true,
    "foam.ui.md.Flare":true,
    "foam.graphics.CView":true,
    "foam.graphics.Circle":true,
    "foam.graphics.AbstractCViewView":true,
    "foam.graphics.PositionedCViewView":true,
    "PositionedDOMViewTrait":true,
    "PositionedViewTrait":true,
    "CalcSpeechView":true,
    "PropertyView":true,
    "DAOListView":true,
    "AbstractDAOView":true,
    "SimpleValue":true,
    "CountExpr":true,
    "NumberFormatter":true,
    "DOMValue":true,
    "foam.i18n.Visitor":true,
    "foam.i18n.MessagesBuilder":true,
    "foam.i18n.ChromeMessagesBuilder":true,
    "foam.i18n.ChromeMessagesExtractor":true,
    "foam.i18n.GlobalController":true,
    "History":true,
    "InputPoint": true
  };

  var class_ = CLASS;

  GLOBAL.CLASS = function(m) {
    var id = m.package ? m.package + '.' + m.name : m.name;
    if ( usedModels[id] ) class_(m);
  };

  var templates = {
    'CalcView.CSS' : true,
    'foam.ui.animated.Label.CSS' : true,
    'CalcView.toHTML' : true,
    'HistoryCitationView.toHTML' : true,
    'foam.ui.SlidePanel.toHTML' : true,
    'MainButtonsView.toHTML' : true,
    'SecondaryButtonsView.toHTML' : true,
    'TertiaryButtonsView.toHTML' : true
  };

  var aevalTemplate_ = aevalTemplate;

  GLOBAL.aevalTemplate = function(t, model) {
    return templates[model.id + '.' + t.name] ?
      aevalTemplate_(t, model)  :
      aconstant(function() { return ''; }) ;
  };

})();