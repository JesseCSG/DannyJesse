game.PlotScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
        
	onResetEvent: function() {	
            // on reset, change screen to new-screen.
                me.audio.playTrack("creepPiano");
            
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("plot-screen")), -10);
                // input and register set to visible.
                document.getElementById("input").style.visibility = "visible";
                document.getElementById("register").style.visibility = "hidden";
                // unbinds ability keys below.
                me.input.unbindKey(me.input.KEY.A);
                me.input.unbindKey(me.input.KEY.S);
                me.input.unbindKey(me.input.KEY.D);
                me.input.unbindKey(me.input.KEY.F);
                me.input.unbindKey(me.input.KEY.B);
                // adds font and text to new screen.
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function() {
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font('Times New Roman', 26, 'white');
                    },
                    
                    draw: function(renderer) {
                        // draws text below.
                        this.font.draw(renderer.getContext(), "CONTROLS: ", this.pos.x, this.pos.y + 20);
                        this.font.draw(renderer.getContext(), "Arrow Keys(Up, Down, Left, Right) for Movement", this.pos.x + 15, this.pos.y + 45);
                        this.font.draw(renderer.getContext(), "V for Pause.", this.pos.x + 15, this.pos.y + 70);
                        this.font.draw(renderer.getContext(), "B for In-Game Purchases.", this.pos.x + 15, this.pos.y + 95);
                        this.font.draw(renderer.getContext(), "A for Attack.", this.pos.x + 15, this.pos.y + 120);
                    },
                    
                    update: function() {
                        // updates returns true.
                        return true;
                    }
                })));
                
                
        },
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            // on destroy, set input and register to hidden.
            document.getElementById("input").style.visibility = "hidden";
            document.getElementById("register").style.visibility = "hidden"; 
            me.audio.stopTrack("creepPiano"); 
	}
});











