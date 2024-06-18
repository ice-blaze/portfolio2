
import {
	ChangeDetectionStrategy, Component,
} from '@angular/core'

// Had to create an SVG component because the pattern is less blury compared to img or background-url or object
@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: `app-pattern`,
	standalone: true,
	// eslint-disable-next-line @angular-eslint/component-max-inline-declarations
	template: `
	<svg
		class="pattern"
		id="patternId"
		width="100%"
		height="100%"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<pattern
				id="a"
				patternUnits="userSpaceOnUse"
				width="100"
				height="50"
				patternTransform="scale(1.4) rotate(0)"
			>
				<rect
					x="0"
					y="0"
					width="100%"
					height="100%"
					fill="hsla(0, 0%, 95%, 1)"
				/>
				<path
					d="M-5.002-4.998v1.789c.16-.65.473-1.19.742-1.789zm3.162 0c-.72 1.202-1.645 2.306-1.701 3.793a31.715 31.715 0 0 1-.252 2.926l-.014.084-.074.029a22.74 22.74 0 0 0-.574.242l-.11.049-.255.113-.077.035-.105.05v3.78c1.03-.59 1.67-1.682 2.805-2.097h.004A21.095 21.095 0 0 1 2.8 2.846a21.492 21.492 0 0 1 4.543 0 21.166 21.166 0 0 1 4.998 1.16 21.124 21.124 0 0 1 13.763 17.603c.081.756.123 1.521.123 2.272l.036.49a3.567 3.567 0 0 0 3.562 3.565h.42c1.965 0 3.565-1.6 3.565-3.565 0-.084-.009-.164-.024-.244.015-.08.024-.162.024-.246 0-1.965-1.6-3.565-3.565-3.565l-.42-.035c-.411 0-.826-.01-1.242-.035-.123-.84-.312-1.658-.514-2.469h.01c.723.064 1.457.08 2.166.118a5.994 5.994 0 0 1 5.988 5.986c0 .084.009.167.024.246a1.3 1.3 0 0 0-.024.244 5.996 5.996 0 0 1-5.988 5.988h-.42a5.993 5.993 0 0 1-5.986-5.986l-.035-.492c0-10.33-8.403-18.733-18.733-18.733-3.791 0-7.253 1.146-10.206 3.09l.132 3.383c2.278-2.296 6.201-3.84 10.074-3.84 8.878 0 16.1 7.223 16.1 16.1l.035.492c0 4.753 3.866 8.62 8.62 8.62.07 0 .142-.005.21-.016.068.01.138.015.21.015 4.752 0 8.62-3.866 8.62-8.619 0-.084-.008-.167-.023-.246.015-.08.023-.162.023-.246 0-4.753-3.868-8.621-8.62-8.621a33.271 33.271 0 0 1-2.882-.223 17.562 17.562 0 0 1-.217-.035l-.033-.082c-.36-.916-.807-1.786-1.267-2.643l-.043-.078c1.43.458 3.116.57 4.441.639 6.09 0 11.045 4.954 11.045 11.043 0 .082.007.165.021.246-.015.08-.021.162-.021.246 0 6.09-4.956 11.043-11.045 11.043-.07 0-.14.005-.209.016a1.34 1.34 0 0 0-.21-.016c-6.09 0-11.044-4.954-11.044-11.043l-.035-.492c0-7.541-6.134-13.676-13.676-13.676-4.154 0-9.353 2.393-9.786 4.885l-1.128 6.477c.944-4.708 5.736-8.729 10.914-8.729 6.09 0 11.043 4.954 11.043 11.043 0 1.53.25 3.041.639 4.514l-.074-.041c-.858-.491-1.756-.89-2.655-1.274l-.074-.03-.013-.083c-.183-1.023-.194-2.068-.247-3.086 0-4.753-3.865-8.621-8.619-8.621-4.753 0-8.62 3.868-8.62 8.62 0 .052.003.103.009.153-.045.986-.12 1.963-.254 2.934l-.016.084-.072.03c-.397.155-.747.321-1.12.49v3.9c1.052-.608 1.642-1.794 2.804-2.219l.006-.002A21.091 21.091 0 0 1 2.8 28.092a21.492 21.492 0 0 1 4.543 0 21.176 21.176 0 0 1 4.998 1.16 21.124 21.124 0 0 1 13.763 17.604c.081.755.124 1.52.124 2.271 0 .128.018.255.054.377a3.57 3.57 0 0 0 3.543 3.187l.42.034a21.497 21.497 0 0 1 3.549.298c1.27.215 2.517.544 3.72.985.595.217.994.727 1.561.994h7.32c-1.2-1.767-2.437-3.583-2.437-5.875v-.002c.001-6.088 4.954-11.041 11.043-11.041 6.089 0 11.042 4.953 11.043 11.04v.003c0 2.292-1.238 4.108-2.438 5.875h7.588c.508-.233.764-.8 1.293-.994l.006-.002a20.815 20.815 0 0 1 4.99-1.158h.002c.756-.081 1.521-.121 2.272-.121l.559-.036a3.57 3.57 0 0 0 3.544-3.185c.036-.12.055-.248.055-.38a21.572 21.572 0 0 1 .297-3.548 21.007 21.007 0 0 1 2.586-7.127 21.123 21.123 0 0 1 11.004-9.2l.006-.001a21.091 21.091 0 0 1 7.19-1.275l-.001-2.635c-.303 0-.607.007-.912.02.013-.33.02-.658.02-.987l.034-.492c0-.472.401-.796.858-.856v-2.7a3.566 3.566 0 0 0-3.49 3.556l-.035.492c0 .412-.013.826-.037 1.242-.898.127-1.641.309-2.467.514v-.014c.067-.746.08-1.502.115-2.234 0-3.272 2.653-5.909 5.914-5.955V15.29c-4.713.047-8.547 3.866-8.547 8.59a26.054 26.054 0 0 1-.244 3.086l-.015.084-.073.029c-1.004.407-1.804.824-2.658 1.275l-.07.04c.471-1.423.569-3.127.639-4.514 0-6.06 4.919-10.965 10.968-11.012v-2.633c-7.501.047-13.603 6.133-13.603 13.645l-.035.492c0 6.09-4.954 11.043-11.043 11.043l-.559-.002c-6.089 0-11.045-4.954-11.045-11.043v-.49c0-6.09 4.956-11.043 11.045-11.043l.559-.035c1.374.021 2.714-.24 4.023-.604l-.047.082c-.485.854-.886 1.743-1.263 2.639l-.036.082-.082.013c-.861.154-1.733.19-2.595.21l-.559.035c-4.753 0-8.621 3.867-8.621 8.62v.49c0 4.754 3.868 8.622 8.621 8.622h.559c4.753 0 8.62-3.866 8.62-8.62l.036-.491c0-8.851 7.184-16.042 16.025-16.084V5.164c-10.293.043-18.66 8.414-18.66 18.717l-.035.492a5.993 5.993 0 0 1-5.986 5.986h-.559a5.996 5.996 0 0 1-5.988-5.988v-.49a5.994 5.994 0 0 1 5.988-5.986l.559-.036c.589.007 1.17-.04 1.746-.082h.012c-.227.818-.375 1.644-.514 2.47a21.33 21.33 0 0 1-1.244.034l-.559.035a3.569 3.569 0 0 0-3.564 3.565v.49c0 1.965 1.599 3.565 3.564 3.565h.559c1.965 0 3.564-1.6 3.564-3.565l.035-.49a21.214 21.214 0 0 1 1.281-7.27 21.215 21.215 0 0 1 2.862-5.32 21.133 21.133 0 0 1 9.744-7.285h.004a21.089 21.089 0 0 1 7.191-1.277V.094c-.303 0-.607.007-.912.02.009-.227.014-.454.017-.678.025-.1.038-.202.038-.309 0-.472.4-.798.857-.857v-2.7a3.567 3.567 0 0 0-3.47 3.178c-.036.12-.055.248-.055.379 0 .411-.013.826-.037 1.242-.904.134-1.64.308-2.467.514V.869c.045-.586.077-1.168.115-1.744 0-1.609.675-3.046 1.711-4.123H98.16c-.719 1.202-1.645 2.306-1.701 3.793a1.326 1.326 0 0 0-.043.332c.014.877-.09 1.738-.209 2.594l-.014.084-.074.029c-.92.36-1.794.813-2.654 1.273l-.074.041c.42-1.275.544-2.735.638-4.021 0-1.609 1.09-2.745 1.711-4.125h-2.685c-.476 1.335-1.622 2.316-1.656 3.805-.026.102-.04.21-.04.32 0 6.09-4.953 11.043-11.042 11.043l-.56.033c-7.54 0-13.677 6.137-13.677 13.678-.036.995.07 1.983.225 2.96.087.53.24 1.049.379 1.554l-.067-.038c-.855-.486-1.862-.928-2.662-1.277l-.074-.03-.014-.083c-.182-1.024-.206-2.066-.209-3.086 0-8.877 7.223-16.1 16.1-16.1l.559-.035c4.642 0 8.438-3.689 8.613-8.289.027-.106.043-.216.043-.33 0-1.463.469-2.777.836-4.125H87.17c-.296 1.269-.806 2.458-.828 3.81-.025.101-.04.207-.04.315a5.993 5.993 0 0 1-5.985 5.986l-.559.033c-10.33 0-18.734 8.405-18.734 18.735-.013.814.033 1.492.082 2.234v.014c-.884-.248-1.635-.363-2.467-.514-.044-.628-.037-1.16-.037-1.734a21.57 21.57 0 0 1 .353-3.867 20.981 20.981 0 0 1 2.11-6.055 21.129 21.129 0 0 1 11.424-9.953l.005-.002a21.118 21.118 0 0 1 4.99-1.158h.003c.756-.08 1.52-.121 2.271-.121l.558-.036a3.57 3.57 0 0 0 3.545-3.185c.036-.12.055-.248.055-.379a21.215 21.215 0 0 1 .404-4.123h-2.68l-.01.053a8.612 8.612 0 0 0-.017.101c-.019.111-.035.223-.053.334-.416.025-.832.037-1.244.037l-.558-.002c-.412 0-.828-.01-1.244-.035l-.053-.334-.02-.105-.007-.049h-2.711c.12.614.246 1.229.312 1.852v.001c.08.756.123 1.519.123 2.27 0 .412-.013.828-.037 1.244-.838.12-1.658.312-2.469.514l.002-.014c.061-.585.069-1.167.08-1.744 0-1.461-.516-2.757-.834-4.123h-2.632c.366 1.347.834 2.661.834 4.123.013.883-.09 1.737-.21 2.596l-.015.084-.072.029c-.828.325-1.662.749-2.432 1.15l-.227.125-.07.04c.421-1.306.566-2.663.602-4.018v-.006c0-1.608-1.199-2.688-1.711-4.123h-2.633c.62 1.38 1.71 2.513 1.71 4.121v.002c0 6.09-4.953 11.045-11.042 11.045-6.09 0-11.043-4.956-11.043-11.045v-.002c0-1.608 1.09-2.742 1.71-4.121h-2.632c-.512 1.435-1.71 2.515-1.71 4.123v.006c-.024 1.373.24 2.71.6 4.017l-.068-.039c-.876-.502-1.754-.893-2.66-1.275l-.072-.03-.016-.083c-.153-.862-.187-1.734-.209-2.596 0-1.462.468-2.776.834-4.123h-2.632c-.319 1.366-.834 2.662-.834 4.123.012.576.017 1.158.08 1.742l.002.016C35.539.68 34.72.489 33.882.369a21.294 21.294 0 0 1 .085-3.515 21.16 21.16 0 0 1 .283-1.852h-2.658c-.03.166-.077.315-.102.488-.955.035-1.923.072-2.906 0-.027-.156-.073-.326-.102-.488h-2.69c.122.614.247 1.229.313 1.852v.001c.081.756.123 1.519.123 2.27 0 .128.019.256.055.379a3.568 3.568 0 0 0 3.543 3.185c.034 0 .068 0 .102-.003.102.025.208.039.318.039a21.57 21.57 0 0 1 3.232.246 21.127 21.127 0 0 1 17.924 20.91c.027.569-.017 1.21-.037 1.734-.837.122-1.657.313-2.467.514v-.014c.078-.747.08-1.5.082-2.234 0-10.33-8.404-18.733-18.734-18.733-.034 0-.066.002-.1.004a1.324 1.324 0 0 0-.32-.039A5.993 5.993 0 0 1 23.84-.873a1.32 1.32 0 0 0-.037-.315c-.023-1.352-.533-2.541-.828-3.81h-2.64c.368 1.348.837 2.662.837 4.125 0 .111.013.222.04.33.176 4.6 3.972 8.29 8.614 8.29.034 0 .068-.002.102-.005.102.026.208.04.318.04 8.877 0 16.1 7.222 16.1 16.099.039 1.036-.068 2.068-.21 3.086l-.013.084c-.949.369-1.848.827-2.734 1.306l-.069.038c.497-1.523.598-2.97.604-4.514 0-7.541-6.137-13.676-13.678-13.676-.034 0-.066.001-.1.004a1.326 1.326 0 0 0-.32-.04c-6.09 0-11.043-4.955-11.043-11.044 0-.11-.014-.216-.039-.318-.034-1.489-1.18-2.47-1.654-3.805h-2.686c.621 1.38 1.711 2.515 1.711 4.123.042 1.371.273 2.71.639 4.023l-.074-.04c-.873-.5-1.755-.891-2.655-1.274l-.074-.03-.014-.083c-.17-.97-.188-1.959-.252-2.926-.056-1.487-.981-2.59-1.7-3.793H9.347c1.035 1.077 1.71 2.514 1.71 4.123.058.58.075 1.17.116 1.744l.002.014C10.36.659 9.53.509 8.707.369a21.287 21.287 0 0 1-.035-1.244c0-.128-.02-.255-.057-.377a3.566 3.566 0 0 0-3.611-3.184 3.568 3.568 0 0 0-3.477 3.184 1.31 1.31 0 0 0-.054.377c0 .412-.013.828-.038 1.244C.52.505-.218.69-1.03.883V.869c.045-.586.076-1.168.115-1.744 0-1.609.675-3.046 1.71-4.123zm49.932 0c-.77 1.29-1.711 2.514-1.711 4.123v.008l.002-.002c.003 4.75 3.868 8.615 8.619 8.615 4.75 0 8.617-3.863 8.621-8.613v-.008c0-1.609-.94-2.833-1.71-4.123h-2.636c1.035 1.076 1.71 2.514 1.711 4.121v.002a5.994 5.994 0 0 1-5.986 5.988 5.994 5.994 0 0 1-5.986-5.988v-.002c0-1.607.676-3.045 1.71-4.121zm6.842.56a3.568 3.568 0 0 0-3.495 3.633 3.566 3.566 0 0 0 3.631 3.492 3.566 3.566 0 0 0 3.496-3.562 3.568 3.568 0 0 0-3.632-3.563zM28.84-1.86c.787.02 1.583.026 2.392 0a23.784 23.784 0 0 0 0 1.972c-.424-.01-.952.017-1.406-.054a.94.94 0 0 1-.93-.932c-.007-.32-.062-.633-.056-.986zm49.93 0c.33.013.66.021.988.021h.558c.33 0 .658-.007.987-.021-.01.225-.015.451-.018.675-.024.1-.037.204-.037.311a.934.934 0 0 1-.932.932l-.558.035c-.33 0-.66.006-.989.02a23.797 23.797 0 0 0 0-1.973zm-73.698.056a.93.93 0 0 1 .93.93c0 .105.012.209.037.31.003.227.01.452.02.678a23.624 23.624 0 0 0-1.973 0c.01-.226.014-.453.017-.677.025-.1.038-.204.038-.311 0-.513.418-.93.931-.93zm49.93 0a.931.931 0 0 1 0 1.862.932.932 0 0 1 0-1.862zM50.978 12.2c.089.027.177.053.266.078 2.471.727 5.05.64 7.516 0 .088-.025.176-.05.263-.078l-.045.082c-.483.849-.92 1.848-1.265 2.64l-.033.081-.082.014c-1.728.303-3.475.237-5.192 0l-.082-.014-.033-.082c-.404-.995-.82-1.792-1.266-2.639l-.047-.082zm2.266 5.578h.012c1.168.124 2.335.085 3.492 0h.012c-.22.8-.384 1.72-.516 2.467a21.23 21.23 0 0 1-2.486 0c-.12-.864-.31-1.646-.514-2.467zm-48.172.118a5.993 5.993 0 0 1 5.987 5.986c.044.743.063 1.496.115 2.234l.002.014c-.815-.223-1.645-.374-2.469-.514-.018-.626-.047-1.164-.07-1.734a3.568 3.568 0 0 0-3.633-3.563 3.568 3.568 0 0 0-3.496 3.563c0 .05.003.102.01.152a1.33 1.33 0 0 0-.045.34c0 .412-.013.826-.037 1.242-.84.122-1.657.313-2.467.514v-.014c.012-.128.022-.256.031-.385l.006-.068c.009-.126.015-.252.021-.379l.004-.068c.006-.128.01-.257.014-.385v-.053c.003-.135.006-.27.006-.406 0-.052-.004-.102-.01-.152.029-.108.043-.221.043-.338a5.994 5.994 0 0 1 5.988-5.986zm23.768 5c.33.013.659.021.986.021l.42.035c.513 0 .932.417.932.93v.49a.934.934 0 0 1-.932.932h-.42a.93.93 0 0 1-.93-.93l-.035-.492c0-.327-.007-.656-.021-.987zm25.176 0a23.797 23.797 0 0 0 1.972 0 23.8 23.8 0 0 0-.021.986c0 .082.008.165.023.246-.015.08-.023.16-.023.244 0 .33.007.66.021.988a23.8 23.8 0 0 0-1.972 0c.013-.33.021-.66.021-.988 0-.084-.008-.164-.023-.244.015-.08.023-.162.023-.246 0-.327-.008-.656-.021-.986zm27.287 0c-.014.33-.02.659-.02.986l-.035.492c0 .513-.419.93-.932.93h-.558a.934.934 0 0 1-.932-.932v-.49c0-.513.419-.93.932-.93l.558-.035c.327 0 .657-.008.987-.021zm-76.23.056a.93.93 0 0 1 .929.93c0 .114.015.228.045.338-.006.05-.01.1-.01.152 0 .327.008.658.022.988a23.885 23.885 0 0 0-1.973 0c.013-.328.02-.657.02-.986 0-.052-.003-.104-.008-.154.028-.108.043-.221.043-.338 0-.513.418-.93.931-.93zm49.929 5.02a21.493 21.493 0 0 1 4.496.48 21.124 21.124 0 0 1 16.537 18.404c.08.756.123 1.521.123 2.272 0 .412-.013.826-.037 1.242-.837.122-1.657.314-2.469.516l.002-.016c.012-.128.022-.255.032-.383l.003-.068c.01-.126.017-.253.024-.379l.002-.07c.006-.128.01-.257.014-.385l.002-.05.003-.407c0-10.33-8.403-18.732-18.732-18.732-10.33 0-18.732 8.402-18.732 18.732 0 .135 0 .27.004.404l.002.053c.006.278.018.556.037.834l.006.068c.009.128.019.256.03.383l.003.016c-.816-.225-1.645-.376-2.469-.516a21.228 21.228 0 0 1 1.244-8.512 21.19 21.19 0 0 1 3.936-6.656 21.139 21.139 0 0 1 8.67-5.95h.004a21.11 21.11 0 0 1 7.266-1.281zm-49.93 2.424c-3.79 0-7.1 1.075-10.051 3.018v3.344c2.78-2.287 6.178-3.73 10.051-3.73 8.878 0 16.1 7.223 16.1 16.1 0 .114.013.226.04.332.083 2.172 1.08 4.07 2.485 5.543h5.862c-3.157-.163-5.72-2.678-5.72-5.875 0-.108-.012-.214-.036-.315-.169-10.185-8.506-18.417-18.73-18.417zm99.926.015c-10.188.042-18.488 8.244-18.656 18.402a1.323 1.323 0 0 0-.04.315c0 3.197-2.561 5.712-5.718 5.875h5.861c1.406-1.473 2.402-3.37 2.485-5.543.027-.106.043-.218.043-.332 0-8.851 7.184-16.041 16.025-16.084zm-49.996 2.617c8.877 0 16.1 7.223 16.1 16.1.014.882-.09 1.738-.21 2.596l-.015.082-.072.03c-.923.362-1.8.814-2.663 1.276l-.066.04c.414-1.27.552-2.772.602-4.02v-.004c0-7.541-6.135-13.676-13.676-13.676-7.542 0-13.676 6.135-13.676 13.676v.004c0 .135.002.27.006.406.015 1.235.27 2.436.596 3.613l-.067-.037c-.876-.505-1.755-.894-2.662-1.277l-.072-.031-.016-.082c-.153-.863-.187-1.734-.209-2.596 0-8.877 7.223-16.1 16.1-16.1zm-49.93 2.424c-4.181 0-8.16 2.096-10.67 5.062l-.509 6.343c1.187-4.817 6-8.772 11.18-8.772 6.089 0 11.042 4.954 11.042 11.043.043 1.365.284 2.716.639 4.023l-.074-.043c-.859-.49-1.754-.89-2.655-1.271l-.074-.031-.013-.082c-.171-.971-.19-1.96-.252-2.926-.175-4.6-3.971-8.291-8.614-8.291-4.642 0-8.438 3.69-8.613 8.29-.046.939-.11 1.871-.232 2.796l-.02.129-.016.084c-.024.01-.047.021-.072.03-.327.129-.628.269-.94.405l-.075.035-.106.05v2.677h1.475c.515-.237.792-.797 1.33-.994l.006-.002A21.095 21.095 0 0 1 2.8 52.848a21.494 21.494 0 0 1 4.543 0 21.163 21.163 0 0 1 4.998 1.16c.594.217.992.728 1.558.994h7.32c-1.2-1.767-2.437-3.583-2.437-5.875 0-.11-.013-.216-.039-.318-.17-7.395-6.237-13.358-13.672-13.358zm99.926.031c-7.395.047-13.43 5.96-13.6 13.327a1.31 1.31 0 0 0-.039.318c0 2.292-1.237 4.108-2.437 5.875h7.55c.516-.237.793-.797 1.33-.994l.007-.002a21.095 21.095 0 0 1 7.19-1.275l-.001-2.635c-.304 0-.608.005-.912.017.009-.226.015-.45.018-.675.024-.1.037-.204.037-.311 0-.472.4-.796.857-.856v-2.7a3.568 3.568 0 0 0-3.47 3.179c-.037.12-.055.246-.055.377 0 .412-.013.828-.037 1.244-.837.12-1.658.312-2.467.514v-.016c.011-.127.022-.255.031-.383l.006-.068c.009-.126.015-.252.021-.379l.004-.068c.006-.13.01-.258.014-.387v-.05c0-.031 0-.062.002-.093.026-.102.039-.208.039-.314 0-3.272 2.65-5.909 5.912-5.955v-2.635c-4.603.045-8.365 3.688-8.539 8.26a34.11 34.11 0 0 1-.232 2.795l-.02.129-.016.084c-.024.01-.047.021-.072.03-.918.36-1.796.814-2.654 1.274l-.074.041c.435-1.306.537-2.674.638-4.023 0-6.06 4.92-10.965 10.97-11.012zm-79.193 1.963c.087.027.175.053.263.078l.069.02c2.677.744 5.48.637 8.132-.098l-.042.076c-.49.855-.888 1.748-1.268 2.645l-.033.082-.084.014-.131.021c-1.93.235-3.696.225-5.479-.021l-.084-.014a23.421 23.421 0 0 0-.033-.082c-.402-.992-.801-1.776-1.265-2.639-.016-.027-.03-.054-.045-.082zm49.93 0c2.79.85 5.818.778 8.605 0l-.049.086c-.486.852-.885 1.742-1.262 2.635-.01.027-.024.055-.035.082l-.082.014c-1.847.302-3.78.264-5.62.02l-.13-.02-.084-.014-.033-.082c-.36-.915-.805-1.784-1.266-2.64l-.045-.08zm-20.733 3.06c-4.753 0-8.621 3.869-8.621 8.622v.006h.002c.001 2.29.975 4.325 2.437 5.869h5.914c-3.157-.163-5.718-2.678-5.718-5.875v-.002a5.993 5.993 0 0 1 5.986-5.984c3.3 0 5.985 2.684 5.986 5.984v.002c0 3.197-2.562 5.712-5.718 5.875h5.914c1.462-1.544 2.437-3.578 2.439-5.867v-.008c0-4.753-3.868-8.621-8.621-8.621zM78 43.022l.01.002c1.336.13 2.727.096 4.054 0h.01c-.226.816-.374 1.644-.513 2.47-1.01.06-2.071.033-3.047-.003-.137-.914-.32-1.656-.514-2.468zm-49.93.002h.01c1.308.124 2.618.095 3.914 0h.01c-.225.817-.374 1.645-.514 2.47-.983.07-1.951.033-2.906 0-.122-.838-.312-1.659-.514-2.47zm-22.998.118a5.993 5.993 0 0 1 5.987 5.986c.056.58.075 1.17.117 1.744v.014c-.817-.226-1.643-.376-2.469-.514a21.285 21.285 0 0 1-.035-1.244c0-.128-.02-.255-.057-.377a3.568 3.568 0 0 0-3.611-3.186 3.57 3.57 0 0 0-3.477 3.186c-.036.12-.054.246-.054.377 0 .412-.013.828-.037 1.244-.837.12-1.658.312-2.467.514v-.016c.044-.586.077-1.166.117-1.742a5.993 5.993 0 0 1 5.986-5.986zm49.862 2.423a3.568 3.568 0 0 0-3.495 3.633 3.566 3.566 0 0 0 3.631 3.492 3.566 3.566 0 0 0 3.496-3.562 3.568 3.568 0 0 0-3.632-3.563zM28.84 48.141c.81.026 1.605.02 2.392 0a23.786 23.786 0 0 0 0 1.972c-.33-.013-.659-.021-.986-.021l-.42-.033a.932.932 0 0 1-.93-.932c0-.105-.012-.209-.037-.31-.003-.225-.01-.45-.02-.676zm49.93 0c.33.013.66.02.988.02l.558.001c.327 0 .657-.008.987-.021-.01.225-.015.451-.018.675-.024.1-.037.204-.037.311a.934.934 0 0 1-.932.932l-.558.033c-.33 0-.66.007-.989.021a23.797 23.797 0 0 0 0-1.972zm-73.698.056a.93.93 0 0 1 .93.93c0 .105.012.209.037.31.003.226.01.451.02.676a23.784 23.784 0 0 0-1.973 0c.01-.226.014-.45.017-.676.025-.1.038-.203.038-.31 0-.513.418-.93.931-.93zm49.93 0A.93.93 0 1 1 55 50.055a.93.93 0 0 1 0-1.858z"
					stroke-width="1"
					stroke="none"
					fill="hsla(260, 84%, 60%, 1)"
				/>
			</pattern>
		</defs>
		<rect
			width="800%"
			height="800%"
			transform="translate(0,0)"
			fill="url(#a)"
		/>
	</svg>
	`,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PatternComponent { }
