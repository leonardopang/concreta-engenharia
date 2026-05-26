const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );

const isWatch = process.argv.includes( '--watch' );

module.exports = {
	...defaultConfig,
	output: {
		...defaultConfig.output,
		clean: true,
	},
	plugins: [
		...( defaultConfig.plugins || [] ),
		...( isWatch
			? [
					new BrowserSyncPlugin(
						{
							proxy: 'http://concreta-engenharia.local',
							files: [
								'build/**/*',
								'blocks/**/*.php',
								'**/*.php',
							],
							reloadDelay: 300,
							notify: false,
							open: false,
						},
						{ reload: true }
					),
			  ]
			: [] ),
	],
};
