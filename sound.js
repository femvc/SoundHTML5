    function SoundHTML5() {
        if(SoundHTML5.id_count == undefined) {
            SoundHTML5.id_count = 1;
        } else {
            SoundHTML5.id_count ++;
        }
        
        if(SoundHTML5.instances == undefined) {
            SoundHTML5.instances = {};
        }
        
        this.object_id = 'object_id_' + SoundHTML5.id_count;
        
        SoundHTML5.instances[this.object_id] = this;
        
        var elem = document.createElement('div');
        elem.className = '__sound_flash__';
        var au = document.createElement('audio');
        au.id = this.object_id;
        au.controls = 'controls';
        au.cache = 'cache';
        elem.appendChild(au);
        document.body.appendChild(elem);
        
        return this;
    }
    
    SoundHTML5.prototype.loadSound = function(url, streaming) {
        var au = document.getElementById(this.object_id);
        au.src = url;
        au.play();
    };
    
    SoundHTML5.prototype.start= function() {
        var au = document.getElementById(this.object_id);
        if (au && au.Play) {
            au.Play();
        }
        else if (au && au.play) {
            au.play();
        }
    };

