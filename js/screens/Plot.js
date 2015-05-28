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
                me.input.bindKey(me.input.KEY.SPACE, "space");
                // adds font and text to new screen.
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function() {
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font('Times New Roman', 26, 'white');
                    },
                    
                    draw: function(renderer) {
                        // draws text below.
                        this.font.draw(renderer.getContext(), "In the forest; cold, dark, confused.", this.pos.x, this.pos.y + 20);
                        this.font.draw(renderer.getContext(), "You, Wilton Spann, have found yourself in a predicament.", this.pos.x + 20, this.pos.y + 50);
                        this.font.draw(renderer.getContext(), "You, whom have awaken in this wilderness, must do", this.pos.x + 20, this.pos.y + 80);
                        this.font.draw(renderer.getContext(), "what you must do. You must outlast this place to", this.pos.x + 20, this.pos.y + 110);
                        this.font.draw(renderer.getContext(), "find your home. Can you, through all odds, survive... ", this.pos.x + 20, this.pos.y + 140);
                        this.font.draw(renderer.getContext(), "THE FOREST!?!?", this.pos.x + 25, this.pos.y + 170);
                        this.font.draw(renderer.getContext(), "Press SPACE to Start.", this.pos.x + 25, this.pos.y + 200);

                    },
                    
                    update: function() {
                        // updates returns true.
                        return true;
                    }
                })));
                
                this.handeler = me.event.subscribe(me.event.KEYDOWN, function(action, keyCode, edge) {                    
                    if(action === "space") {
                        // If F1 pressed, then update exp and cost, then change screen to PLAY.
                        me.state.change(me.state.PLAY);
                        
                    }    
                });
                
                
        },
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            // on destroy, set input and register to hidden.
            document.getElementById("input").style.visibility = "hidden";
            document.getElementById("register").style.visibility = "hidden"; 
            me.audio.stopTrack("creepPiano");
            //unsubscribe handler.
            me.event.unsubscribe(this.handeler);
            me.input.unbindKey(me.input.KEY.SPACE);
	}
});











