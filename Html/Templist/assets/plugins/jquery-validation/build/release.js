module.exports = function( Release ) {

function today() {
	return new Date().toISOString().replace(/T.+/, "");
}

Release._jsonFiles.push( "validation.jquery.json" );

Release.define({
	issueTracker: "github",
	changelogShell: function() {
		return Release.newVersion + " / " + today() + "\n==================\n\n";
	},

	generateArtifacts: function( done ) {
		Release.exec( "grunt release", "Grunt command failed" );
		done([
			"dist/additional-methods.js",
			"dist/additional-methods.min.js",
			"dist/jquery.validate.js",
			"dist/jquery.validate.min.js"
		]);
	},

	cdnPublish: false,

	_checkAuthorsTxt: function() {}
});

};
