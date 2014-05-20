(function($win) {

    "use strict";
    var __this = null;
    var _tabIndexCount = 0;

    var __typewriter = function() {
        this.selectors = {};
        this.listeners = [];
        this.registerListeners = function(ctx, keyMaps, handler) {
            var keyCode = keyMaps;
            this.listeners.push({
                selector: getContextSelector(ctx),
                keyCode: keyCode,
                callback: handler
            });
            this.keyMapListeners = {
                9: [],
                13: [],
                16: [],
                39: [],
                38: []
            };
            if (typeof this.keyMapListeners[keyCode] != "undefined") {
                this.keyMapListeners[keyCode].push({
                    ctx: ctx,
                    callback: handler
                });
            }
        },

        this.keyMapDefs = {
            "Right": 39,
            "Enter": 13,
            "Shift": 16,
            "Tab": 9,
            "Control": 17
        };
        this.keyHandlers = {};
        this.keyBoardStates = {
            "UP": "UP",
            "DOWN": "DOWN"
        };

        this.keymaps = {
            9: "Tab",
            13: "Enter",
            17: "Control",
            16: "Shift",
            27: "Esc",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "Left",
            38: "Up",
            39: "Right",
            40: "Down",
            46: "Delete"
        };
        this.keyMapDefs = getKeyMapDefinitions(this.keymaps);
        this.wireupKeyBindings(this.keymaps, this.keyMapDefs);
    };

    function getKeyMapDefinitions(keyMaps) {
        var keyMapDefs = {};
        var keyValue;
        for (var key in keyMaps) {
            if (keyMaps.hasOwnProperty(key)) {
                keyValue = keyMaps[key];
                keyMapDefs[keyValue] = key;
            }
        }
        return keyMapDefs;
    }

    function getContextSelector(ctx) {
        var ctxId = ctx.attributes["id"].value;
        var ctxCssClass = ctx.className || "";
        return {
            "id": ctxId,
            "class": ctxCssClass
        };
    }

    function publishRegisteredEvents(events, kbEvent) {
        if (events) {
            var max = events.length;
            for (var i = 0; i < max; i++) {
                kbEvent.detail.context = events[i].ctx;
                events[i].callback(kbEvent.detail);
            }
        }
    }

    function bindEvent(ctx, eventName) {
        if (ctx.attachEvent) {
            ctx.attachEvent(eventName, function(e) {
                onKeyBoardEvent(e);
            });
        } else {
            ctx[eventName] = function(e) {
                onKeyBoardEvent(e);
            };
        }
    }

    function onKeyBoardEvent(evt) {

        if (isEventKeyMapDefined(evt.keyCode)) {} else {
            killEvent(evt);
        }

    }

    function stopBubble(evt) {
        event.cancelBubble = true;

    }

    function killEvent(evt) {
        evt.cancel = true;
        evt.returnValue = false;
        evt.cancelBubble = true;

        if (evt.stopPropagation) {
            evt.stopPropagation();
        }
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        return false;
    }

    function isEventKeyMapDefined(keyCode) {
        return true;
    }

    __typewriter.prototype = {
        subscribers: {},
        wireupKeyBindings: function(keymaps, keymapdefs) {
            var keyMapValue = null;
            var _this = this;
            bindEvent(document.body, "onkeydown");
            bindEvent(document.body, "onkeyup");
            this.subscribers = {};
            var keyDef, state;

            _this.onKeyBoard(_this.keyBoardStates.UP, document.body, keymaps, function(keyEvent) {
                if (_this.subscribers.hasOwnProperty(keyEvent.keyCode)) {
                    var subscribedHandler = _this.subscribers[keyEvent.keyCode];
                    subscribedHandler.call(_this, keyEvent);
                }
            });

        },
        on: function(keyConfig, ctxSel, handler) {
            var keyDef = this[keyConfig.keyMap];
            var state = keyConfig.state || "up";
            var key = keyConfig.keyMap;

            if (typeof key !== "undefined") {
                this.subscribers[key] = function(key, kbEvent) {
                    handler.call(this, ctxSel);
                }
            }
        },
        offKeyBoard: function(ctx, keyMaps, handler) {
            var eventName = "onkeyup";
            if (typeof ctx != "undefined" && ctx != null && ctx[eventName] != null) {
                ctx[eventName] = null;
            }
        },
        onKeyBoard: function(state, ctx, keyMaps, handler) {
            var eventName = state === this.keyBoardStates.UP ? "onkeyup" : "onkeydown";
            if (ctx.attachEvent) {
                ctx.attachEvent(eventName, function(e) {
                    publishEvent({
                        keyMap: __this.keymaps[e.keyCode],
                        keyCode: e.keyCode,
                        target: e.target,
                        state: 'keyup'
                    }, handler);
                });
            } else {
                ctx[eventName] = function(e) {
                    publishEvent({
                        keyMap: __this.keymaps[e.keyCode],
                        keyCode: e.keyCode,
                        target: e.target,
                        state: 'keyup'
                    }, handler);
                };
            }
        }
    }

    if (__this === null) {
        __this = new __typewriter();
    }

    function publishEvent(eventArgs, handler) {
        var kbEvent = new CustomEvent("kbEvent", {
            detail: {
                target: eventArgs.target,
                keyCode: eventArgs.keyCode,
                type: eventArgs.keyMap + '_' + eventArgs.state,
                eventArgs: eventArgs
            }
        });
        handler.call(this, kbEvent.detail);
    }
    $win.typewriter = __this;
    return __this;
}).call(this, window);