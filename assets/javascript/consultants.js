var consultantInfo = {
  bilango: {
    name: "Mr Balakrishnan Ilango",
    bio: `Mr Ilango is a Consultant Orthopaedic Surgeon at the Pennine Acute Hospitals NHS Trust since 2001. He completed his orthopaedic training on the Northwest Orthopaedic Training Programme. He completed MSc degree in Orthopaedic Engineering at Cardiff University, obtained fellowships from the London and Irish colleges. He is also an examiner for FRCS Trauma & Orthopaedics.<p>

    Mr Ilango specialises in Hip And Knee Surgery. He has extensive experience in dealing with arthritis of the hip and knee, Hip and Knee Replacements, Arthoscopy of the Knee, Partial Knee Replacement and ACL Reconstruction. In addition, he performs surgery for Carpal Tunnel syndrome, Trigger finger, Tennis Elbow and Foot Deformities - Bunion, Toe Deformities and Arthritis of Big Toe.`
  },
  lmuir: {
    name: "Mr Lindsay Muir",
    bio: `Mr Lindsay Muir was appointed as a consultant hand and upper limb surgeon at Salford Royal (Hope) Hospital in 1996. Salford Royal is one of the major teaching hospitals attached to the University of Manchester Medical School and Mr Muir is an honorary senior lecturer in orthopaedic surgery at the University.<p>

      Mr Muir graduated MB ChB from the University of Glasgow. He trained initially in Glasgow and in Liverpool. He underwent orthopaedic training in Liverpool and was awarded the degree of M Ch Orth by the University of Liverpool. He subsequently underwent specialist training in hand and upper limb surgery at Wrightington Hospital. He was hand fellow at the plastic surgery unit in Manchester (a nationally funded post) and spent six months training with Dr Guy Foucher at SOS Main in Strasbourg, France.<p>
      
      Mr Muir's elective practice at Salford encompasses hand, wrist and elbow surgery exclusively. He has a dedicated hand trauma list. He has treated professional musicians and national team cricket players.<p>
      
      Mr Muir has had original research articles published in major peer reviewed journals including The Journal of Bone and Joint Surgery, Journal of Hand Surgery, Journal of Trauma and Injury. He has an active training programme for local trainees and for advanced trainees in hand surgery, drawn from plastic and orthopaedic backgrounds.<p>
      
      Mr Muir has lectured on hand surgery and on orthopaedics at John Moores University, Wrightington Hand Course for the FRCS(Orth), Association of Surgeons in Training, and Orthoteers Instructional Course. He has instructed on wrist and elbow arthroscopy at the Minimal Access Training Unit at The Royal College of Surgeons of England. He has just been elected chairman of the organising committee of the British Society for Surgery of the Hand Instructional Courses.<p>
      
      Mr Muir is a member of the British Society for Surgery of the Hand and the North West Surgical Hand Society. He is a founder member of SAS Hand Manchester.<p>
      
      Mr Muir is an examiner for the Membership of the Royal College of Surgeons of Glasgow and for the European Diploma in Hand Surgery. He has also served as examiner for the British Hand Diploma.<p>
      
      In his spare time Mr Muir enjoys music and playing the piano.`
  },
  dmurray: {
    name: "Mr David Murray",
    bio: `Mr David Murray specialises in all aspects of hand & wrist surgery, including minimally invasive arthroscopic procedures, base of thumb arthritis, small joint replacement, trigger finger, carpal tunnel decompression and Dupuytrens contracture (including injection therapy).  He is actively involved in teaching and research.  He is an Advanced Trauma Life Support Instructor, and honorary senior lecturer.<p>

      Mr David Murray has a passion for the treatment of all hand & wrist disorders and has won prizes at national meetings for his work within the field.  He has presented his work, and lectured on sports injuries, at various international meetings in recent years, including the World Sport Trauma Congress and FIFA Football Medical Conference.<p>
      
      Mr David Murray gained his medical degree from the University of Manchester and completed his further Orthopaedic surgical training on the Northwest Orthopaedic rotation, He completed a hand & wrist fellowship at the world-renowned Wrightington Hospital.`
  },
  njain: {
    name: "Mr Neil Jain",
    bio: `Mr Neil Jain is a specialist in the treatment of all sports injuries. This includes the keyhole surgical treatment of injuries to the knee, such as ligament and cartilage injury, and shoulder, such as dislocation. In addition he can where appropriate administer non-operative treatments such as injections of Platelet Rich Plasma (PRP). He is actively involved in teaching having lectured to the University of Manchester, University of Liverpool and University of Lancaster about Orthopaedic and Sports Injuries.<p>

      Mr Neil Jain is well regarded for his strong research background having been published in many peer reviewed journals and medical textbooks. He has in excess of 100 presentations at National and International meetings, including the International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine, the World Sports Trauma Congress and the FIFA Football Medical Conference. He has won prizes in recognition of his work. He demonstrates his passion for the treatment of all sports injuries as his main research interests are within sport, especially injury prevention strategies, discovering the mechanism of injuries and shortening return to play times. He is an active member of the British Orthopaedic Sports Trauma and Arthroscopy Association (BOSTA) and the European Society of Sports Traumatology Knee Surgery and Arthroscopy (ESSKA), being a participant of their Education Committee.<p>
      
      Having gained his medical degree from the University of Southampton Mr Jain then completed his further Orthopaedic surgical training on the North West Orthopaedic rotation. He completed a Sports Injuries and Reconstructive Arthroscopy Fellowship at the world-renowned University of British Columbia in Vancouver, Canada.<p>
      
      With a keen interest in sport Mr Jain has worked with a number of sports clubs and associations both amateur and professional including Wolverhampton Wanderers FC, Barrow Raiders RLFC, Bury FC, University of British Columbia Thunderbirds, Vancouver Canadians (Baseball), Winnipeg Blue Bombers (American Football) and Vancouver Canucks (Ice Hockey). He has also collaborated with the Football Association (The FA) with recent projects to help decrease the injury rates in the England National Football team.<p>
      
      Sport is also Mr Neil Jain's main form of entertainment in his spare time; in particular he attends as many live events as possible, recently including the FIFA World Cup in Brazil, the European Rugby Champions Cup Final in Rugby Union, World Championship Boxing as well as the annual NFL games held at Wembley Stadium in London. He attends the gym regularly and plays golf and tennis when possible, he is a novice skier but is looking to improve!`
  }
};

function initConsultants() {
  consultantPage();
}

var page = `<div class="bio-container-container">
<div class="bio-container">
<div class="name-container">
<div id="consultant-name"></div>
<div id="consultant-image"></div>
<div id="close">Back to consultants</div>
</div>
<div>
<div id="consultant-bio"></div>
</div>
</div>
</div>`;

function consultantPage() {
  $(".view-profile").click(function(e) {
    var id = e.target.id;

    $("body").append(page);
    $("body").css("overflow", "hidden");
    $(".bio-container").css("overflow", "auto");
    $("#consultant-name").append(consultantInfo[id].name);
    $("#consultant-image").append(
      `<img class="img-border" src=assets/images/consultants/${
        id[0]
      }-${id.slice(1)}.png />`
    );
    $("#consultant-bio").append(consultantInfo[id].bio);

    $("#close").click(function(e) {
      $("body").css("overflow", "auto");
      $(".bio-container").remove();
    });
  });
}