/**
 * This script helps download the images from the provided links and update the imports in the service files.
 * 
 * Steps to use:
 * 1. For Pexels images, you'll need to manually download them from the URLs provided
 * 2. For Canva images, you'll need to export them from Canva and save them
 * 3. Put all the downloaded images in the src/assets folder with the names specified below
 * 4. The image names are structured as [service]-panel[number].jpg or .png
 */

// Image mapping:
const imageMapping = {
  // Tab 1: Care for Adults
  "adults-panel4": "https://www.pexels.com/photo/joyful-adult-daughter-greeting-happy-surprised-senior-mother-in-garden-3768131/",
  
  // Tab 2: Disability Support
  "disabilities-panel1": "https://www.pexels.com/photo/a-man-sitting-on-the-wheelchair-shooting-a-ball-8415906/",
  "disabilities-panel2": "https://www.pexels.com/photo/man-giving-a-tour-of-a-brewery-3009799/",
  "disabilities-panel3": "https://www.canva.com/design/DAGnF_XpmRY/iAhO1wxwEexnsD0IPinPbQ/edit?utm_content=DAGnF_XpmRY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "disabilities-panel4": "https://www.canva.com/design/DAGnF6ghgDA/50Phnnkd3bwZleSxcUYL1Q/edit?utm_content=DAGnF6ghgDA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  
  // Tab 3: Live-in Care
  "livein-panel1": "Website 5 - on whatsapp",
  "livein-panel2": "https://www.canva.com/design/DAGnFxm1qo0/HOwg2QE5OrVDnuKoW_Cy_g/edit?utm_content=DAGnFxm1qo0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "livein-panel3": "Website 2 - on whatsapp",
  
  // Tab 4: After Hospital Care
  "hospital-panel1": "First image sent on whatapp titled 'for website'",
  "hospital-panel2": "Website 3 - whatsapp",
  "hospital-panel3": "https://www.canva.com/design/DAGnFzDyVQ8/w0bivWdlXDrFKIHtEP768g/edit?utm_content=DAGnFzDyVQ8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  
  // Tab 5: Home Care
  "home-panel1": "https://www.pexels.com/photo/a-woman-holding-a-plastic-crate-with-fruits-and-vegetables-7551597/",
  "home-panel2": "https://www.pexels.com/photo/an-elderly-man-holding-leafy-vegetables-7551581/",
  "home-panel3": "https://www.pexels.com/photo/person-holding-white-rectangular-box-8376161/",
  "home-panel4": "https://www.canva.com/design/DAGnGNAn1XQ/XhqDSBDziz2DickXNumYqg/edit?utm_content=DAGnGNAn1XQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "home-extra": "https://www.canva.com/design/DAGnRg1q2gM/IfIXxzGqZhXSU48q5F57KQ/edit?utm_content=DAGnRg1q2gM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  
  // Tab 6: Social Engagement
  "social-panel1": "https://www.canva.com/design/DAGnGC1VXz8/eyQO0AJaDICrbq5I-_qzGg/edit?utm_content=DAGnGC1VXz8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "social-panel2": "Website 4 on whatsapp",
  "social-panel3": "https://www.canva.com/design/DAGnGHHXr_Y/_K1RMMcROiBGaQGAQYwniA/edit?utm_content=DAGnGHHXr_Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "social-panel4": "https://www.canva.com/design/DAGnGEK7kMs/w-yb5Y5EJQBjjtceMqF5Rg/edit?utm_content=DAGnGEK7kMs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  
  // Tab 7: Supported Living
  "supported-panel1a": "https://www.pexels.com/photo/woman-and-elderly-man-sitting-on-bed-7551671/",
  "supported-panel1b": "https://www.pexels.com/photo/an-elderly-man-sitting-while-wearing-eyeglasses-7551592/",
  "supported-panel2": "https://www.canva.com/design/DAGnGLBb6MU/kzZxmTgnSRfJ-PdnfLLWEg/edit?utm_content=DAGnGLBb6MU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "supported-panel3": "https://www.canva.com/design/DAGnGN4-EwQ/VShs3MWcM_3_bs0x7V8TZA/edit?utm_content=DAGnGN4-EwQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "supported-panel4": "https://www.canva.com/design/DAGnGKMC12Q/sxeob4h4_nhAIeGFzfM2Zg/edit",
  
  // Tab 8: Night Services
  "night-panel1": "https://www.canva.com/design/DAGnGGdlZXk/miiaYV2YYWXkvGfZNwaxKg/edit?utm_content=DAGnGGdlZXk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "night-panel2": "https://www.canva.com/design/DAGnGEPT_ak/RrJUdkA_4jBgKXNhOpf9Hg/edit?utm_content=DAGnGEPT_ak&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "night-panel3": "https://www.canva.com/design/DAGnGCFdKFw/8--zlpocL_TvxhaexER2EA/edit?utm_content=DAGnGCFdKFw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
};

/**
 * INSTRUCTIONS FOR EACH TAB:
 * 
 * 1. Care for Adults (CareForAdults.js):
 *    - Update panel 4 with adults-panel4.jpg
 * 
 * 2. Disability Support (DisabilitiesSupport.js):
 *    - Update all 4 panels with the new images
 * 
 * 3. Live-in Care (LiveInCare.js):
 *    - Update all 3 panels with the new images
 * 
 * 4. After Hospital Care (AfterHospitalCare.js):
 *    - Update all 3 panels with the new images
 * 
 * 5. Home Care (HomeCare.js):
 *    - Update all 4 panels with the new images
 *    - Add home-extra.jpg somewhere in the page
 * 
 * 6. Social Engagement (SocialEngagement.js):
 *    - Update all 4 panels with the new images
 * 
 * 7. Supported Living (SupportedLiving.js):
 *    - Use supported-panel1a.jpg and supported-panel1b.jpg for panel 1
 *    - Update panels 2-4 with the new images
 * 
 * 8. Night Care (NightCare.js):
 *    - Update all 3 panels with the new images
 */

console.log("Image mapping reference created. Follow the instructions above to update your files."); 