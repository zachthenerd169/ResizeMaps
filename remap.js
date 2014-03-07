<script>
    function sizeMaps() {
        var image = document.getElementById('imageToSize');
        remap(image);
    };
    
    function remap(imgElem) {
        if (!imgElem) {
            return false;
        }
        else {
            var mapName = imgElem
                .getAttribute('usemap')
                .substring(1),
                map = document.getElementsByName(mapName)[0],
                areas = map.getElementsByTagName('area'),
                imgSrc = imgElem.src,
                currentWidth = imgElem.width,
                originalWidth = imgElem.getAttribute('data-OriginalWidth'),
                multiplier = currentWidth / originalWidth,
                newCoords;
            for (var i = 0, len = areas.length; i < len; i++) {
                newCoords = areas[i]
                    .getAttribute('coords')
                    .replace(/(\d+)/g, function (a) {
                        return Math.round(a * multiplier);
                    });
                areas[i].setAttribute('coords', newCoords);
                imgElem.setAttribute('data-OriginalWidth', currentWidth);
            }
        }
    }
</script>