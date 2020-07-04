import randomColor from 'randomcolor'

class CssHelper{
    static randomColor = function(options) {
        return {
            color : randomColor({
                luminosity: 'dark',
                format: 'rgba'
            }),
        }
    }
}

export default CssHelper