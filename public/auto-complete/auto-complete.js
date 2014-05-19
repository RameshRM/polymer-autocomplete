
(function ($rt){
    'use strict';

    var result = [];

    function dataModel(){
        this.shortText = null;
        this.suggestedText = null;
        this.isSelected = false;
        this.typed = null;
    }
    function suggestions(dataSource, shortText){
        var inputTyped = shortText;

        var filtered = dataSource.filter(function(data){
            return filter(data, shortText);
        });
        result = [];
        var model = null;

        for(var i=0; i<filtered.length;i++){
            model = new dataModel();
            model.suggestedText = filtered[i];
            model.isSelected = false;
            model.typed = inputTyped;
            model.shortText = filtered[i].substring(0, shortText.length);
            model.remainingText = filtered[i].substring(shortText.length);
            result.push(model);
        }
        return result;

    }

    function filter(element, shortText){
        if(element.slice(0,shortText.length).toLowerCase() === shortText.toLowerCase()){
            return element;
        }else{
            return null;
        }
    }

    $rt.fastType = function(dataSource, options){
        this.dataSource = dataSource;
        this.typingOptions = options;
    }

    $rt.fastType.prototype.type = function(shortText){
        if(shortText.length >= this.typingOptions.min){

            return suggestions(this.dataSource, shortText);
        }
    }
}).call(this, window);