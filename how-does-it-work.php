<?php
include_once "header.php";
?>
<div class="container-fluid content-page">
    <div class="row">
        <div class="col-md-10 col-md-offset-1 wega-sm-padding">
            <h1>How does it work?</h1>
            <h3>Abstract - On strong authentication standards and multi-factor authentication schemes in the European and Global regulations</h3>
            <div class="part">
                <h2>Future of Payments</h2>
                <p><strong>WEGA Strong Objective is to fully comply with PSD2 AML D4, GDPR and NIS (CyberSecurity) requirements:</strong></p>
                <p><strong>Article 97</strong> of the Directive establishes a strong client authentication procedure that applies when the payer:</p>
                <ul class="point">
                    <li>access their online payment account;</li>
                    <li>initiates an electronic payment transaction;</li>
                    <li>performs an action through a means of remote communication that may involve a risk of payment fraud or any other fraudulent use.</li>
                    <li>Strong client authentication is defined in Article 4 (30) of the Directive, it is "an authentication based on the use of two or more elements belonging to the categories" knowledge "(something that only the user knows)," possession "(something only 'User') and 'inherent' (something that the user is) and independent in the sense that compromising one does not question the reliability of others and is designed to protect the confidentiality of Authentication data ".</li>
                </ul>
                <p>Source PSD2 -  <a href="http://data.consilium.europa.eu/doc/document/ST-9336-2015-INIT/en/pdf">http://data.consilium.europa.eu/doc/document/ST-9336-2015-INIT/en/pdf</a></p>
                <p class="strong">EBA RTS Project (May 2017 version)</p>
                <p>The authentication code shall be characterized by security data ensuring that:</p>
                <ul class="point">
                    <li>No information arising from elements of the strong authentication procedure categorized as knowledge, possession and inherence can be derived from the disclosure of the authentication code;</li>
                    <li>It is not possible to generate a new identification code based on the knowledge of another authentication code generated for the same payer;</li>
                    <li>The authentication code can not be forged or reproduce.</li>
                </ul>
            </div>
            <div class="part">
                <h2>FIDO Alliance</h2>
                <p>FIDO Alliance was selected by the European Banking Authority (EBA) last for the use of FIDO concepts and requirements in the technical standards (RTS).</p>
                <p><a href="https://fidoalliance.org/resources/FIDO_EBA_Response_2016-02-08.pdf">https://fidoalliance.org/resources/FIDO_EBA_Response_2016-02-08.pdf</a></p>
                <p>FIDO Alliance was selected by EMVCo for the use of FIDO concepts and requirements in EMVCo 3DS 2.0 specifications for multi-factor Strong Authentication solutions with the following objectives:</p>
                <ul class="point">
                    <li>Reduce card fraud</li>
                    <li>Maintain convenient user experience</li>
                    <li>Greatly simplify the development and support for CDCVM across mobile devices and other platforms</li>
                    <li>Provide a standard way for mobile wallet providers and payment application developers to support Consumer Device Cardholder Verification Methods (CDCVM)</li>
                </ul>
            </div>
            <div class="part">
                <h2>FIDO Certified</h2>
                <p>This ecosystem enables enterprises and service providers to deploy strong authentication solutions that reduce reliance on passwords and protect against phishing, man-in-the-middle and replay attacks using stolen passwords.</p>
                <p>The acoustic chip embedded in Wega Card has been FIDO CERTIFIED and thus becomes a 3DSA 2.0 authenticator (<a href="https://fidoalliance.org/certification/fido-certified-products/">https://fidoalliance.org/certification/fido-certified-products/</a>)</p>
                <p>(<a href="www.fidoalliance.org">www.fidoalliance.org</a>)</p>
                <p>As such, Fido ignites a thriving ecosystem of client authentication methods such as biometrics, PINs and second–factors that can be used with a variety of online services in an interoperable manner. For complete PSD2 Wega has chosed to select qualified FIDO certified biometrics authenticators in the 3DSA 2.0 platform for integration with Wega apps</p>
            </div>
            <div class="part">
                <h2>Strong Acoustic Authentication</h2>
                <p><strong>Identifying</strong><br>While needing to access any account functionalities , the user choses to place its Wega card in front of the microphone and presses the button on the card. An audio sequence is issued to the card and then transmitted to the interactive server. This first step is used to identify the user and the holder of the card. No EMV related information are passed during this sequence. There are no technical relationship between the acoustic Chip and the EMV elements. The audio sequence only contains dynamic OTPs (One-Time-Password) and a unique token reference.</p>
                <p><strong>Authenticating</strong><br>Once the user has been identified, the server asks the user to confirm their authentication by entering another dynamic FIDO certified element and the PIN. This PIN is validated on the FIDO Server then transmitted to the server, which checks that the audio identification sequence and the encrypted OTP match.</p>
                <p>The a<strong>coustic chip</strong> is only used for internal account validation and confirmation of card ordering, mobile top up and card to card transfers. It is a dynamic token with an OTP replacing username and password as defined in the FIDO UAF specifications.</p>
            </div>
            <div id="activate-card" class="part">
                <h2>Activate Card</h2>
                <p>In order to start using the card please undertake the following simple and secure steps:</p>
                <p>Sign it at the back.</p>
                <p><strong>Activate it as follows:<strong></p>
                <p>Via mobile application Manchester City Wega</p>
                <ul class="point">
                    <li>You have downloaded the Manchester City Wega mobile app and registered your Wega 3DSA account on the app:
                        <ul class="point">
                            <li>Go to the Activation button.</li>
                            <li>Fill out the CID (The Cardholder ID is the 12 digit number printed on the front of you card under the cardholder’s name)</li>
                            <li>Push the X symbol on the corner of your Wega 3DSA card (check short or long?) close to the microphone of your mobile phone. When the Wega 3DSA system recognizes the unique acoustic password your cad will be activated now.</li>
                        </ul>
                    </li>
                    <li>You have not downloaded the Manchester City Wega mobile app available on Google Play and App Store yet. Please do so and go through the Wega 3DSA account registration process. Then please continue with steps a.i.1 through 4 above.</li>
                </ul>
                <p>Via the website <a href="www.wegamastercard.com"></a></p>
                <p>lease call our number +44 (0) 161 883 1501</p>
                <p class="helper-text">Please provide card number and DOB in DD/MM/YY format.</p>
            </div>
            <div class="part">
                <h2>Load your card in one of three ways:</h2>
                <ul class="point">
                    <li>Via bank transfer – please check information and process on the mobile app under __________or website www.wegamastercard.com under _____________</li>
                    <li>Via debit card - please check information and process on the mobile app under __________or website www.wegamastercard.com under _____________</li>
                    <li>Via Neosurf voucher – please check information and process on the mobile app under __________or website www.wegamastercard.com under </li>
                </ul>
                <p>Now that you card is activated and loaded here are some of the things you can do with your Wega 3DSA payment card.</p>
                <p>You can pay for goods and services now at millions of locations worldwide instead of cash and checks and at any ATM that displays the Mastercard acceptance mark.</p>
                <p> You retain full cost control of the money you spend.</p>
                <p>Apply for extra cards for you partner relatives or business associates.</p>
                <p>Check your balance or review a list of transactions on your mobile app, via the website or IVR.</p>
                <p>Accept payments whenever and wherever you want, via bank transfer from other accounts or from other cardholders.</p>
                <p>Share money with another cardholder. This replaces many other, more expensive money transfer methods you may have been using previously.</p>
                <p>You have access to Facebox , your digital safe to store all your confidential documents</p>
            </div>
            <div class="part">
                <h2>What is Wega 3DSA Licensing?</h2>
                <p>Through an Wega 3DSA Licensing Agreement accepted parties are allowed to integrate Wega 3DSA technology and manufacturing provided by Truxtun Capital in their own business models and in association with the parties’ own services and providers. For example if Bank X wanted to license Wega 3DSA from Truxtun Capital SA, Truxtun Capital would provide the Wega 3DSA technology and manufacturing but Bank X would set up own issuing, processing etc. Please contact <a href="mailto:support@wega.co">support@wega.co</a> for further information.</p>
            </div>
        </div>
    </div>
</div>
<?php
include_once "footer.php";
?>