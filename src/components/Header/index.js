import React from 'react'
import styled from 'styled-components'
import Title from '../Title'

const StyledHeader = styled.header`
  margin: auto;
  text-align: center;
  max-width: 50%;

  .subtitle {
    display: none;
    position: relative;
    top: -40px;
    left: 50px;
  }

  @media screen and (min-width: 540px) {
    font-size: 1.25em;
    position: relative;
    max-width: 200px;
    top: -80px;
    margin-bottom: -60px;

    .subtitle {
      display: inline;
      left: 50px;
    }
  }

  @media screen and (min-width: 800px) {
    font-size: 1.6em;
    top: -100px;
    margin-bottom: -90px;

    .subtitle {
      left: 100px;
    }
  }
`

const ComingSoon = ({ className }) => (
  <svg
    className={className}
    width="207"
    height="43"
    viewBox="0 0 207 43"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#F5E05B" fill-rule="evenodd">
      <path d="M155.384 13.339c-.6 1.428-1.537 2.849-2.694 4.055-.507.593-1.605 1.503-2.64.952-.62-.311-1.094-1.027-1.4-1.955-.248-.84-.478-2.312-.11-4.437.44-2.326 1.604-3.872 3.404-4.576a5.527 5.527 0 0 1 1.59-.437l.239-.03c.02.578.372 1.067.93 1.288.715.3 1.118.83 1.308 1.58.206.895-.023 2.18-.627 3.56m3.45-4.195c-.331-1.508-1.197-2.66-2.541-3.365 0 0-.006-.046.036-.1.103-.738-.425-1.495-1.164-1.6-2.724-.534-4.767-.235-6.616.863-1.663 1.026-3.065 2.6-4.97 4.817l-.257.273c-.071.083-.104.183-.153.277-1.061 1.155-2.5 2.034-4.248 3.262.109-.69.164-1.422.178-2.101.179-2.875-.43-5.073-1.778-6.601-1.117-1.217-2.26-1.464-2.51-1.53-.398-.096-.863.059-1.214.343-.305.279-.496.69-.491 1.125.006.047.045 1.154-.167 2.583-.181 1.28-.637 3.077-1.647 4.312-.501.643-.443 1.506.204 2.055.595.508 1.499.396 2.007-.198 1.385-1.717 2.027-3.973 2.293-5.746.332.733.52 1.87.428 3.478-.07 1.41-.204 3.07-.553 4.565a102.563 102.563 0 0 0-3.548 2.612c-1.455 1.145-2.635 2.16-2.282 3.472.083.28.433 1.156 1.748 1.236.488.037.923.032 1.304-.015a5.439 5.439 0 0 0 2.979-1.333c1.134-1.01 1.869-2.503 2.385-4.21 2.979-2.13 6.08-3.945 7.389-5.766-.31 1.978-.218 3.856.257 5.408.543 1.674 1.53 3.004 2.814 3.62.827.43 1.665.569 2.523.464 1.239-.152 2.466-.787 3.582-1.94 2.477-2.673 4.718-6.866 4.012-10.26M173.821 11.075c-.599 1.428-1.537 2.85-2.694 4.055-.507.593-1.605 1.503-2.64.952-.619-.31-1.094-1.027-1.4-1.955-.248-.84-.478-2.312-.11-4.437.44-2.326 1.604-3.872 3.404-4.576a5.527 5.527 0 0 1 1.59-.437l.24-.03c.02.577.372 1.067.93 1.288.714.3 1.117.83 1.307 1.58.206.894-.023 2.18-.627 3.56m.91-7.56s-.007-.047.035-.1c.103-.738-.425-1.496-1.164-1.599-2.724-.536-4.767-.236-6.616.862-1.663 1.026-3.065 2.6-4.97 4.817l-.256.273a1.435 1.435 0 0 0 .151 2.013c.6.555 1.51.491 2.017-.103l.168-.214c-.332 2.023-.24 3.947.244 5.532.543 1.674 1.53 3.004 2.814 3.62a4.224 4.224 0 0 0 2.523.464c1.24-.152 2.466-.787 3.582-1.94 2.477-2.673 4.72-6.866 4.012-10.26-.33-1.508-1.197-2.659-2.54-3.365M106.882 28.338c-1.328 2.968-2.918 5.774-4.405 7.843-.741 1.058-1.332 1.76-1.81 2.205a.606.606 0 0 0 .014-.292c.067-1.024.302-2.262.59-3.458.75-2.945 2.043-5.425 3.605-6.874.865-.832 1.819-1.336 2.856-1.56a20.09 20.09 0 0 1-.85 2.136m-6.048-5.932l-.048.006c-.041-.333-.075-1.006.23-2.06.075-.25.179-.538.305-.85.408-.744.692-1.33.864-1.706a17.639 17.639 0 0 1 1.922-2.61c2.082-2.335 3.644-3.011 4.644-3.133l.19-.024c.197.024.339.006.489.037-3.148 4.303-7.123 9.337-8.596 10.34m12.86 1.952a19.595 19.595 0 0 0-2.123-.755c1.74-6.307 2.679-13.242 2.727-13.634a1.514 1.514 0 0 0-.913-1.532 1.54 1.54 0 0 0-1.728.502 6.173 6.173 0 0 1-.447.684c-.566-.27-1.315-.468-2.232-.452-2.27.037-4.612 1.438-7.04 4.104a20.776 20.776 0 0 0-1.867 2.464 1.461 1.461 0 0 0-.253.36c-.008.01-.048.094-.104.212a15.827 15.827 0 0 0-.872 1.68 29.683 29.683 0 0 1-1.086 1.795c-2.11 3.306-3.134 3.625-3.277 3.643l-.054-.042c-.867-.764-.636-2.823-.418-4.591.146-1.18.249-2.304.132-3.257-.3-2.043-1.626-2.605-2.37-2.756-1.231-.187-2.602.465-4.332 2.128-.955.89-2.06 2.139-3.271 3.69.024-.196.043-.44.114-.642.109-.69.14-1.226.08-1.703-.085-1.102-.632-1.614-1.048-1.854-1.558-.873-3.46.57-4.982 1.966a29.567 29.567 0 0 0-1.912 1.935 1.38 1.38 0 0 0-.315.362c-.085.11-.152.228-.202.35a57.366 57.366 0 0 1-2.341 3.403c-1.487 2.069-2.477 3.062-3.05 3.519-.03-.24-.017-.531.032-.923.073-.977.213-2.202.359-3.381.217-1.381.38-2.804.43-3.971.028-1.357-.053-2.798-1.147-3.437-.677-.401-1.766-.606-3.222.54-.662.517-1.342 1.277-2.094 2.24-1.26 1.558-2.264 3.229-2.3 3.329-.05.085-.09.172-.121.262a63.57 63.57 0 0 1-1.935 3.472c-.992 1.767-1.738 2.778-2.204 3.318l-.035-.285a25.376 25.376 0 0 1-.167-2.543c-.178-3.025-.311-4.895-1.345-5.831a2.082 2.082 0 0 0-1.47-.546c-.958.069-1.888.764-2.922 2.197-.621.85-1.35 2.003-2.097 3.4-.181-1.476-.434-2.751-.742-3.68-.231-.698-.491-1.245-.836-1.687-.63-.794-1.337-1.045-1.873-1.076-1.375-.17-2.734.965-4.61 3.807-.162.26-.365.576-.526.838a2.859 2.859 0 0 0-.373-1.067c-.486-.81-1.223-1.301-2.098-1.338-1.12-.056-2.443.59-3.952 2.08-.95.94-1.81 2.206-1.857 2.212-.454.636-.306 1.44.335 1.942.637.454 1.66.134 2.115-.502.048-.006.633-.755 1.36-1.521.866-.832 1.36-1.135 1.635-1.264.029.238.046.767-.26 1.82-.342 1.155-.898 2.529-1.431 3.707-.987 2.2-1.436 3.27-1.224 4.212.13.66.623 1.133 1.26 1.199.148.03.297.06.44.043.667-.082 1.08-.664 1.252-.831.162-.261.37-.528.61-.945.394-.725.956-1.664 1.542-2.801a126.34 126.34 0 0 1 3.263-5.72c1.177-1.837 1.905-2.603 2.209-2.883.249.453.729 1.603.96 4.67.138 2.304.068 4.49.074 4.536-.014.679.449 1.3 1.098 1.462a1.44 1.44 0 0 0 1.639-.83c.042-.053.987-2.201 2.165-4.425 1.226-2.23 2.044-3.443 2.55-4.037l.048.38c.093.764.115 1.728.179 2.639.05 1.203.108 2.453.278 3.448.13.66.283 1.126.473 1.489.51 1 1.26 1.2 1.7 1.243.143-.018.292.012.387 0 1.048-.128 1.907-1.007 2.54-1.762.633-.755 1.326-1.808 2.133-3.115a69.28 69.28 0 0 0 2.242-4.065c.034-.044.066-.091.094-.14-.005-.047.718-1.25 1.673-2.526.74-1.058 1.343-1.664 1.737-2.003a7.445 7.445 0 0 0-.05.78 58.28 58.28 0 0 1-.382 3.19c-.496 3.833-.751 6.09.265 7.27.398.484.909.71 1.492.736.149.03.244.018.387 0 .858-.105 1.758-.651 2.832-1.75.782-.724 1.665-1.8 2.662-3.131a48.866 48.866 0 0 0 2.584-3.768c.045-.045.088-.092.128-.144 0 0 .525-.838 1.474-1.777.65-.612 1.193-.92 1.55-1.158-.144.792-.415 2.13-1.116 4.297-.726 2.36-1.528 4.49-1.528 4.49-.251.709.039 1.495.705 1.8.255.114.553.175.838.14.43-.053.787-.29 1.032-.658.042-.054 1.942-3.092 4.229-6.13 3.785-5.01 5.293-5.728 5.62-5.817.06.09.089.328.095.763.022.577-.087 1.268-.136 2.048-.291 2.357-.607 5.298 1.354 7.088.707.638 1.605.867 2.553.702 1.017-.217 2.068-.97 3.22-2.295.11.217.236.42.39.594a2.541 2.541 0 0 0 1.898.88c.625-.03 1.275-.254 1.9-.67.448-.296 1.92-1.3 6.96-7.914.377-.482.71-.91 1.039-1.385a102.654 102.654 0 0 1-1.755 7.76 7.753 7.753 0 0 0-1.478.18c-1.798.319-3.378 1.238-4.798 2.669-2.482 2.626-3.622 6.345-4.102 8.338-.5 2.238-.845 5.327-.146 6.693.397.87 1.2 1.109 1.772 1.039.715-.087 1.526-.575 2.438-1.412.699-.618 1.456-1.533 2.287-2.65 1.606-2.276 3.315-5.292 4.846-8.575.42-.922.815-2.034 1.21-3.147.548.126 1.154.342 1.767.606a1.412 1.412 0 0 0 1.894-.717c.348-.72.004-1.548-.716-1.894M27.226 29.074c-.598 1.428-1.536 2.85-2.694 4.055-.507.594-1.604 1.503-2.64.953-.618-.31-1.093-1.027-1.4-1.956-.248-.84-.477-2.31-.11-4.436.44-2.327 1.605-3.872 3.404-4.577a5.502 5.502 0 0 1 1.59-.436l.239-.03c.023.577.373 1.067.932 1.288.714.3 1.117.83 1.306 1.58.206.894-.023 2.18-.627 3.56m3.45-4.196c-.33-1.507-1.196-2.659-2.54-3.364 0 0-.006-.047.036-.1.102-.738-.425-1.496-1.164-1.599-2.725-.536-4.768-.237-6.616.861-1.664 1.026-3.066 2.601-4.97 4.817l-.257.273c-.12.14-.201.3-.257.465-.828 1.044-2.557 3.108-4.536 5.01-1.551 1.543-2.917 2.63-4.091 3.306-1.085.617-1.93.817-2.347.578-.571-.317-.921-.806-1.015-1.568-.193-1.185.18-2.876 1.017-4.719.76-1.689 1.859-3.37 2.969-4.572.555-.6 1.097-.909 1.586-.872.833.091 1.67 1.004 1.902 1.315 1.318 1.676 3.292.03 2.367-1.597-.178-.268-1.698-2.403-4.043-2.599-.97-.026-2.441.204-3.94 1.79-1.324 1.42-2.585 3.364-3.452 5.357-.76 1.688-1.575 4.11-1.252 6.344.246 1.613 1.077 2.866 2.433 3.667.725.394 1.517.54 2.374.433 2.049-.252 4.51-1.859 7.536-4.794a57.924 57.924 0 0 0 5.068-5.69c-.302 1.965-.211 3.831.262 5.374.543 1.675 1.529 3.004 2.813 3.62a4.22 4.22 0 0 0 2.524.464c1.239-.152 2.466-.786 3.582-1.939 2.477-2.673 4.719-6.866 4.012-10.26M68.69 8.363c.19-.023.185.315-.06.297-.762.094-1.305.79-1.206 1.6a1.445 1.445 0 0 0 1.605 1.253c.858-.105 1.615-.633 2.093-1.466a3.428 3.428 0 0 0 .416-2.13c-.2-1.62-1.483-2.623-3.008-2.436a1.414 1.414 0 0 0-1.254 1.605 1.45 1.45 0 0 0 1.415 1.277M205.578 2.678a1.408 1.408 0 0 0-1.9.669c-.042.054-.718 1.636-2.062 3.686-2.109 3.306-3.135 3.625-3.277 3.643l-.053-.042c-.868-.764-.637-2.823-.42-4.591.147-1.178.25-2.303.133-3.256C197.7.744 196.374.182 195.63.032c-1.233-.188-2.604.463-4.334 2.127-.954.89-2.059 2.139-3.27 3.69.024-.196.042-.441.115-.643.108-.69.14-1.225.081-1.702-.087-1.101-.634-1.615-1.05-1.854-1.558-.872-3.46.57-4.982 1.965A28.462 28.462 0 0 0 180 5.867c-.549.648-.427 1.649.17 2.156.593.508 1.587.337 2.09-.305 0 0 .524-.84 1.473-1.777.651-.612 1.193-.92 1.551-1.158-.144.79-.416 2.13-1.117 4.296-.726 2.363-1.528 4.493-1.528 4.493-.25.708.038 1.494.704 1.798.256.115.553.174.84.14.428-.053.787-.29 1.031-.66.042-.053 1.941-3.091 4.228-6.128 3.785-5.011 5.293-5.728 5.621-5.816.06.089.09.328.094.762.023.577-.086 1.268-.136 2.048-.29 2.357-.606 5.297 1.355 7.087.707.639 1.605.867 2.553.702 1.601-.342 3.284-2 5.315-5.15 1.333-2.146 1.967-3.675 2.003-3.776a1.41 1.41 0 0 0-.669-1.901" />
    </g>
  </svg>
)

const Header = ({ ...props }) => (
  <StyledHeader {...props}>
    <Title>We are Wombak</Title>
    <ComingSoon className="subtitle" />
  </StyledHeader>
)

export default Header
