<%@ Control Language="VB"  AutoEventWireup="false" CodeFile="request-info-form.ascx.vb" Inherits="RequestInfoForm" %>

						<form action="" runat="server">
							<label class="text-container">
								<span>First Name</span>
								<span class="text-bg"></span>
								<input id="first-name" class="alphaVal" name="first_name" type="text" />
								<!-- <asp:TextBox id="FirstName" class="input alphaVal" TextMode="SingleLine" runat="server"></asp:TextBox> -->
							</label>
							<label class="text-container">
								<span>Last Name</span>
								<span class="text-bg"></span>
								<input id="last-name" class="alphaVal" name="last_name" type="text" />
							</label>
							<label class="text-container">
								<span>Address</span>
								<span class="text-bg"></span>
								<input id="address" name="address" type="text" />
							</label>
							<label class="text-container">
								<span>City</span>
								<span class="text-bg"></span>
								<input id="city" class="alphaVal" name="city" type="text" />
							</label>
							<!-- Had to set the z-index so that the options would stay on top of the next dropdown -zk -->
							<label class="select-container" style="position: relative; z-index: 15;">
								<span class="select-span">State</span>
								<span class="text-bg"></span>
								<select id="state" class="replacedSelectbox" name="state">
									<option> </option>
									<option value="61">Alabama</option>
									<option value="53">Alaska</option>
									<option value="43">Arizona</option>
									<option value="26">Arkansas</option>
									<option value="73">Armed Forces - Americas</option>
									<option value="62">Armed Forces - Europe</option>
									<option value="77">Armed Forces - Pacific</option>
									<option value="9">California</option>
									<option value="45">Colorado</option>
									<option value="16">Connecticut</option>
									<option value="18">Delaware</option>
									<option value="51">District of Columbia</option>
									<option value="1">Florida</option>
									<option value="2">Georgia</option>
									<option value="54">Hawaii</option>
									<option value="59">Idaho</option>
									<option value="32">Illinois</option>
									<option value="31">Indiana</option>
									<option value="58">Iowa</option>
									<option value="39">Kansas</option>
									<option value="28">Kentucky</option>
									<option value="25">Louisiana</option>
									<option value="11">Maine</option>
									<option value="19">Maryland</option>
									<option value="15">Massachusetts</option>
									<option value="33">Michigan</option>
									<option value="35">Minnesota</option>
									<option value="24">Mississippi</option>
									<option value="55">Missouri</option>
									<option value="48">Montana</option>
									<option value="38">Nebraska</option>
									<option value="60">Nevada</option>
									<option value="13">New Hampshire</option>
									<option value="5">New Jersey</option>
									<option value="42">New Mexico</option>
									<option value="4">New York</option>
									<option value="6">North Carolina</option>
									<option value="36">North Dakota</option>
									<option value="30">Ohio</option>
									<option value="40">Oklahoma</option>
									<option value="52">Oregon</option>
									<option value="17">Pennsylvania</option>
									<option value="10">Puerto Rico</option>
									<option value="14">Rhode Island</option>
									<option value="23">South Carolina</option>
									<option value="7">South Dakota</option>
									<option value="27">Tennessee</option>
									<option value="8">Texas</option>
									<option value="46">Utah</option>
									<option value="12">Vermont</option>
									<option value="57">Virgin Islands</option>
									<option value="20">Virginia</option>
									<option value="50">Washington</option>
									<option value="21">West Virginia</option>
									<option value="34">Wisconsin</option>
									<option value="49">Wyoming</option>
								</select>
							</label>
							<label class="text-container">
								<span>Postal Code</span>
								<span class="text-bg"></span>
								<input id="postal-code" name="postal_code" type="text" />
							</label>
							<label class="text-container">
								<span>Phone Number</span>
								<span class="text-bg"></span>
								<input id="phone-number" name="phone_number" type="text" />
							</label>
							<label class="text-container">
								<span>Email Address</span>
								<span class="text-bg"></span>
								<input id="email-address" name="email_address" type="text" />
							</label>
							<div class="validation-wrapper">
								<div class="validation-container"></div>
							</div>
							
							<!-- <label class="text-container">
								<span>High School Grad Year</span>
								<span class="text-bg"></span>
								<input id="high-school-grad-date" name="high_school_grad_date" type="text" />
							</label> -->
							
							<!-- Had to set the z-index so that the options would stay on top of the next dropdown -zk -->
							<label class="select-container" style="position: relative; z-index: 10;">
								<span class="select-span">High School Grad Year</span>
								<span class="text-bg"></span>
								<select class="replacedSelectbox" id="high-school-grad-year" name="high_school_grad_year">
								</select>
							</label>
							
							<span>DEGREE PROGRAM OF INTEREST?</span><!-- The Program your interested in? -->
							<label class="select-container" style="position: relative; z-index: 5;">
								<span class="select-span">-- Select One --</span>
								<span class="text-bg"></span>
								<select class="replacedSelectbox" id="program-of-interest" name="program_of_interest">
									<option> </option>
									<!-- <option value="0">-- Select One --</option> -->
									<option value="152,144">Advancing Computer Science</option>
									<option value="82,145">Artificial Life Programming</option>
									<option value="149,140">Digital Media</option>
									<option value="148,141">Digital Video</option>
									<option value="161,156">Enterprise Software Development</option>
									<option value="102,142">Game Art &amp; Animation</option>
									<option value="101,163">Game Design</option>
									<option value="23,146">Game Programming</option>
									<option value="30,147">Network Engineering</option>
									<option value="32,148">Network Security</option>
									<option value="162,158">Open Source Technologies</option>
									<option value="100,149">Robotics and Embedded Systems</option>
									<option value="92,155">Serious Games and Simulation</option>
									<option value="153,152">Technology Forensics</option>
									<option value="151,143">Virtual Modeling and Design</option>
									<option value="146,154">Web and Social Media Technologies</option>
								</select>
							</label>

							<span>HOW DID YOU HEAR ABOUT US?</span>
							<label class="select-container">
								<span class="select-span">-- Select One --</span>
								<span class="text-bg"></span>
								<select class="replacedSelectbox" id="hear-about-us" name="hear_about_us">
									<option> </option>
									<!-- <option value="0">-- Select One --</option> -->
									<option value="1046">Achieve Magazine</option>
									<option value="979">Avnet Tech Games</option>
									<option value="1008">AZ Tech Council</option>
									<option value="989">Billboard</option>
									<option value="1049">Bing</option>
									<option value="1097">BotMag.com</option>
									<option value="928">Chatterbox</option>
									<option value="1027">College Confidential</option>
									<option value="849">College Times</option>
									<option value="952">College View</option>
									<option value="1001">College Week Live</option>
									<option value="1051">CollegeProwler.com</option>
									<option value="1052">ComiCon - Phoenix</option>
									<option value="1003">Community College</option>
									<option value="1096">CPU - Computer Power User</option>
									<option value="897">Defcon</option>
									<option value="1029">E3</option>
									<option value="977">Email</option>
									<option value="1022">Facebook</option>
									<option value="916">From a Family Member</option>
									<option value="872">From a Friend</option>
									<option value="873">From a UAT Student</option>
									<option value="894">From an Alumnus</option>
									<option value="1033">G33kTest.com</option>
									<option value="1028">Game Developer's Conference (GDC)</option>
									<option value="918">Game Informer</option>
									<option value="858">Google</option>
									<option value="865">Gradschools.com</option>
									<option value="1026">GradView.Com</option>
									<option value="991">Hakin9 Magazine</option>
									<option value="787">High School Counselor</option>
									<option value="976">High School Newspaper</option>
									<option value="885">IGDA</option>
									<option value="781">Internet</option>
									<option value="1080">Liaison - Bron Stadheim</option>
									<option value="965">Liaison - Lori Saba</option>
									<option value="964">Liaison - Marcus Wright</option>
									<option value="1087">LinkedIn</option>
									<option value="1004">Military.com</option>
									<option value="1083">Morning Stream Show</option>
									<option value="1095">MovieMaker Magazine</option>
									<option value="1081">NACAC - Bron Stadheim</option>
									<option value="958">NACAC - Lori Saba</option>
									<option value="960">NACAC - Marcus Wright</option>
									<option value="1088">Next Step Magazine</option>
									<option value="1043">PAX Conference</option>
									<option value="1094">PenTest Magazine</option>
									<option value="939">Phoenix Film Festival</option>
									<option value="882">Postcard in Mail</option>
									<option value="978">Princeton Review</option>
									<option value="990">Robot Magazine</option>
									<option value="1093">Servo Magazine</option>
									<option value="1098">ServoMag.Com</option>
									<option value="1030">SIGGRAPH</option>
									<option value="929">Technology Forum</option>
									<option value="982">YouTube</option>
									<option value="other">Other</option>
								</select>
							</label>
							<label class="text-container">
								<span>Other Inquiry</span>
								<span class="textarea-bg"></span>
								<textarea id="other-inquiry" name="other_inquiry"></textarea>
							</label>
							<label class="submit-container">
								<span class="text-bg"></span>
								<span>Submit Request</span>
								<input id="submit" class="submit-button" type="button" value="" />
							</label>
						</form>
						
						<div id="serverYear"><%=serverYear %></div>
						<div id="ajaxResponse"></div>