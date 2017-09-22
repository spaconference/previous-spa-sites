function enableMenuKeyboardNavigation() {
    var nav = document.getElementsByTagName('nav');
    if (nav[0]) {
        // Convert anchorless SPANs into BUTTONs
        var nonAnchors = nav[0].getElementsByTagName('span');
        var convertToButtons = [];
        for (var i = 0; i < nonAnchors.length; i++) {
            var parentNode = nonAnchors[i].parentNode;
            if ('a' !== parentNode.nodeName.toLowerCase()) {
                convertToButtons.push(nonAnchors[i]);
            }
        }

        for (var i = 0; i < convertToButtons.length; i++) {
            var parentNode = convertToButtons[i].parentNode;
            var button = document.createElement('button');
            button.innerHTML = convertToButtons[i].innerHTML
            parentNode.replaceChild(button, convertToButtons[i]);
        }

        // Apply 'focus' classes to all parent LIs on focus,
        // and remove them on 'blur'
        var anchors = nav[0].getElementsByTagName('a');
        var buttons = nav[0].getElementsByTagName('button');
        anchors = Array.prototype.slice.call(anchors);
        buttons = Array.prototype.slice.call(buttons);

        var targets = anchors.concat(buttons);
        for (var i = 0; i < targets.length; i++) {
            var target = targets[i];
            target.addEventListener('blur', function(e) {
                var parentNode = e.target.parentNode;
                while ('nav' !== parentNode.nodeName.toLowerCase()) {
                    if ('li' === parentNode.nodeName.toLowerCase()) {
                        removeClass(parentNode, 'focus');
                    }
                    parentNode = parentNode.parentNode;
                }
            });

            target.addEventListener('focus', function(e) {
                var parentNode = e.target.parentNode;
                while ('nav' !== parentNode.nodeName.toLowerCase()) {
                    if ('li' === parentNode.nodeName.toLowerCase()) {
                        addClass(parentNode, 'focus');
                    }
                    parentNode = parentNode.parentNode;
                }
            });
        }

        // Enable styles to support JS behaviours once we're done
        addClass(nav[0], 'js');
    }
}

// Class management {
function hasClass(target, className) {
    var regex = new RegExp("(\\b)" + className + "($|\\b)", "g");
    return regex.test(target.className);
}

function addClass(target, className) {
    // If the class already exists, don't bother adding
    if (hasClass(target, className)) {
        return target.className;
    }

    if (target.className.length != 0) {
        target.className += " ";
    }
    target.className += className;

    return target.className;
}

function removeClass(target, className) {
    var regex = new RegExp("(\\b)" + className + "($|\\b)", "g");
    target.className = target.className.replace(regex, "$2");

    return target.className;
}
/*
} /class management */

if(window.addEventListener) {
    window.addEventListener('load', enableMenuKeyboardNavigation, false);
}
