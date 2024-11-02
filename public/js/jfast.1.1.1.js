(function(global) {
    'use strict';

    var jFast = function(selector) {
        if (!(this instanceof jFast)) {
            return new jFast(selector);
        }

        this.elements = document.querySelectorAll(selector);
    };

    jFast.prototype.each = function(callback) {
        Array.prototype.forEach.call(this.elements, callback);
        return this;
    };

    // CSS Manipulation
    jFast.prototype.addClass = function(className) {
        return this.each(function(element) {
            element.classList.add(className);
        });
    };

    jFast.prototype.removeClass = function(className) {
        return this.each(function(element) {
            element.classList.remove(className);
        });
    };

    jFast.prototype.toggleClass = function(className) {
        return this.each(function(element) {
            element.classList.toggle(className);
        });
    };

    jFast.prototype.hasClass = function(className) {
        return Array.prototype.some.call(this.elements, function(element) {
            return element.classList.contains(className);
        });
    };

    jFast.prototype.attr = function(name, value) {
        if (value === undefined) {
            return this.elements[0].getAttribute(name);
        } else {
            return this.each(function(element) {
                element.setAttribute(name, value);
            });
        }
    };

    jFast.prototype.text = function(value) {
        if (value === undefined) {
            return this.elements[0].textContent;
        } else {
            return this.each(function(element) {
                element.textContent = value;
            });
        }
    };

    jFast.prototype.html = function(value) {
        if (value === undefined) {
            return this.elements[0].innerHTML;
        } else {
            return this.each(function(element) {
                element.innerHTML = value;
            });
        }
    };

    jFast.prototype.css = function(property, value) {
        return this.each(function(element) {
            element.style[property] = value;
        });
    };

    // Event Handling
    jFast.prototype.on = function(event, handler) {
        return this.each(function(element) {
            element.addEventListener(event, handler, false);
        });
    };

    jFast.prototype.off = function(event, handler) {
        return this.each(function(element) {
            element.removeEventListener(event, handler, false);
        });
    };

    jFast.prototype.trigger = function(event) {
        var evt = new Event(event);
        return this.each(function(element) {
            element.dispatchEvent(evt);
        });
    };

    // Effects and Animation
    jFast.prototype.hide = function() {
        return this.each(function(element) {
            element.style.display = 'none';
        });
    };

    jFast.prototype.show = function() {
        return this.each(function(element) {
            element.style.display = '';
        });
    };

    jFast.prototype.fadeIn = function(duration) {
        duration = duration || 400;
        return this.each(function(element) {
            element.style.opacity = 0;
            element.style.display = '';

            var last = +new Date();
            var tick = function() {
                element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
                last = +new Date();

                if (+element.style.opacity < 1) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
                }
            };

            tick();
        });
    };

    jFast.prototype.fadeOut = function(duration) {
        duration = duration || 400;
        return this.each(function(element) {
            element.style.opacity = 1;

            var last = +new Date();
            var tick = function() {
                element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
                last = +new Date();

                if (+element.style.opacity > 0) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
                } else {
                    element.style.display = 'none';
                }
            };

            tick();
        });
    };

    jFast.prototype.slideUp = function(duration) {
        duration = duration || 400;
        return this.each(function(element) {
            element.style.height = element.offsetHeight + 'px';
            element.style.transitionProperty = 'height, margin, padding';
            element.style.transitionDuration = duration + 'ms';
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;

            setTimeout(function() {
                element.style.display = 'none';
            }, duration);
        });
    };

    jFast.prototype.slideDown = function(duration) {
        duration = duration || 400;
        return this.each(function(element) {
            element.style.display = '';
            var height = element.offsetHeight;
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;

            setTimeout(function() {
                element.style.height = height + 'px';
                element.style.paddingTop = '';
                element.style.paddingBottom = '';
                element.style.marginTop = '';
                element.style.marginBottom = '';
            }, 16);

            setTimeout(function() {
                element.style.height = '';
                element.style.transitionProperty = '';
                element.style.transitionDuration = '';
            }, duration);
        });
    };

    // DOM Traversal
    jFast.prototype.find = function(selector) {
        var foundElements = [];
        this.each(function(element) {
            var nodes = element.querySelectorAll(selector);
            foundElements = foundElements.concat(Array.prototype.slice.call(nodes));
        });
        this.elements = foundElements;
        return this;
    };

    jFast.prototype.parent = function() {
        var parents = [];
        this.each(function(element) {
            if (element.parentNode) {
                parents.push(element.parentNode);
            }
        });
        this.elements = parents;
        return this;
    };

    jFast.prototype.parents = function() {
        var parents = [];
        this.each(function(element) {
            var parent = element.parentNode;
            while (parent) {
                parents.push(parent);
                parent = parent.parentNode;
            }
        });
        this.elements = parents;
        return this;
    };

    jFast.prototype.children = function() {
        var children = [];
        this.each(function(element) {
            children = children.concat(Array.prototype.slice.call(element.children));
        });
        this.elements = children;
        return this;
    };

    jFast.prototype.next = function() {
        var nextElements = [];
        this.each(function(element) {
            if (element.nextElementSibling) {
                nextElements.push(element.nextElementSibling);
            }
        });
        this.elements = nextElements;
        return this;
    };

    jFast.prototype.prev = function() {
        var prevElements = [];
        this.each(function(element) {
            if (element.previousElementSibling) {
                prevElements.push(element.previousElementSibling);
            }
        });
        this.elements = prevElements;
        return this;
    };

    jFast.prototype.siblings = function() {
        var siblings = [];
        this.each(function(element) {
            var sibling = element.parentNode.firstChild;
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== element) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
        });
        this.elements = siblings;
        return this;
    };

    // DOM Manipulation
    jFast.prototype.append = function(content) {
        return this.each(function(element) {
            if (typeof content === 'string') {
                element.insertAdjacentHTML('beforeend', content);
            } else if (content instanceof HTMLElement) {
                element.appendChild(content);
            }
        });
    };

    jFast.prototype.prepend = function(content) {
        return this.each(function(element) {
            if (typeof content === 'string') {
                element.insertAdjacentHTML('afterbegin', content);
            } else if (content instanceof HTMLElement) {
                element.insertBefore(content, element.firstChild);
            }
        });
    };

    jFast.prototype.remove = function() {
        return this.each(function(element) {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
    };

    jFast.prototype.empty = function() {
        return this.each(function(element) {
            element.innerHTML = '';
        });
    };

    // Data Attributes
    jFast.prototype.data = function(key, value) {
        if (value === undefined) {
            return this.elements[0].dataset[key];
        } else {
            return this.each(function(element) {
                element.dataset[key] = value;
            });
        }
    };

    // Utilities
    jFast.each = function(collection, callback) {
        Array.prototype.forEach.call(collection, callback);
    };

    jFast.map = function(collection, callback) {
        return Array.prototype.map.call(collection, callback);
    };

    jFast.grep = function(array, callback) {
        return array.filter(callback);
    };

    jFast.inArray = function(item, array) {
        return array.indexOf(item) !== -1;
    };

    // Selectors
    jFast.prototype.filter = function(selector) {
        var filteredElements = Array.prototype.filter.call(this.elements, function(element) {
            return element.matches(selector);
        });
        this.elements = filteredElements;
        return this;
    };

    // AJAX
    jFast.ajax = function(options) {
        var xhr = new XMLHttpRequest();
        xhr.open(options.type || 'GET', options.url, options.async !== false);
    
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var response = xhr.responseText;
    
                    // Kiểm tra nếu dữ liệu trả về là JSON và phân tích cú pháp
                    try {
                        response = JSON.parse(response);
                    } catch (e) {
                        console.warn('Response is not JSON:', response);
                    }
    
                    if (options.success) {
                        options.success(response, xhr.status, xhr);
                    }
                } else {
                    if (options.error) {
                        options.error(xhr, xhr.status, xhr.statusText);
                    }
                }
            }
        };
    
        if (options.headers) {
            for (var header in options.headers) {
                xhr.setRequestHeader(header, options.headers[header]);
            }
        }
    
        if (options.beforeSend) {
            options.beforeSend(xhr);
        }
    
        xhr.send(options.data || null);
    };

    // Attach to global
    global.$ = jFast;

}(window));
