var template = require('raptor-templates').load(require.resolve('./index.rhtml'));

module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    function getData(){
        var result = ['Red', 'Blue', 'Green', 'Yellow', 'Yelp', 'Yello Stone', 'Pink', 'Blah', 'position','bottom','z-index','background-color','min-width','max-width','border-top-left-radius', 'border-top-right-radius','border-bottom-right-radius','border-bottom-left-radius'];
        return result;
    }
    template
        .stream({
            items: getData()
        })
        .pipe(res);
};