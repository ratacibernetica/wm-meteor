
Template.registerHelper("team", function(){
  var team = [
    //martin
    {
      id:1,
      image:"mroldan.jpg",
      name:"Martín Roldán",
      firstName:"Martín",
      fullName:"Martín Roldán Araujo",
      title:"Emerging Technologies Geek / Linux Server Expert",
      description:"My motivation is to keep learning how to apply new paradigms and technologies on development of professional software focused on users needs.",
      areas:[
        {
          first:true,
          name:"Technologies Geek / Linux Expert",
          skills:[
            { name:"Back End"},
            { name:"Project Management"},
            { name:"SysAdmin"},
            { name:"Mobile"}
          ]
        },
        {
          name:"Back End/Mobile",
          skills:[
            { name:"Webservices"},
            { name:"Payment Gateway(2 party/3 party)"},
            { name:"Meteor"},
            { name:"Android"},
            { name:"Sprint"}
          ]
        },
        {
          name:"Project Management",
          skills:[
            { name:"Agile"},
            { name:"SCRUM"},
            { name:"Git"},
            { name:"Jira"}
          ]
        },
        {
          name:"SysAdmin",
          skills:[
            { name:"Linux Server Administration"},
            { name:"Docker"},
            { name:"DNS / CRYPTO / Performance Management"}
          ]
        }
      ],
      url:"https://mx.linkedin.com/in/martinroldanaraujo"
    },// \martin
    //isaac
    {
      id:2,
      image:"irios.jpg",
      name:"Isaac Ríos",
      firstName:"Isaac",
      fullName:"Isaac Pérez Ríos",
      title:"Front-end Artist / Customer Support Expert",
      description:"One can work harder, but not much more , but you can be more productive. It 's not about working harder, but smarter. And that is done with technology.",
      areas:[
        {
          first:true,
          name:"Front-end / Customer Support",
          skills:[
            { name:"Front End"},
            { name:"Customer Support"},
            { name:"Back End"}
          ]
        },
        {
          name:"Front End",
          skills:[
            {name:"Jquery"},
            {name:"HTML / CSS"},
            {name:"SASS / LESS"},
            {name:"UX / UI"},
            {name:"Angular"},
            {name:"Bootstrap / Flexbox / Materialize"}
          ]
        },
        {
          name:"Back End",
          skills:[
            { name:"Ruby on Rails"}
          ]
        },
        {
          name:"Customer Support",
          skills:[
            { name:"Tailored software development"},
            { name:"Jira"}
          ]
        }
      ],
      url:"https://mx.linkedin.com/in/riosystems"
    },// \isaac
    //rene
    {
      id:3,
      image:"rrobles.jpg",
      name:"René Robles",
      firstName:"René",
      fullName:"René Robles Robles",
      title:"Back End Developer / Team Manager",
      description:"I’m a devoted Software developer who loves implementing technology solutions. Specialised as an Invoice and billing Systems Consultant and experienced cross platform developer.",
      areas:[
        {
          first:true,
          name:"Back End Developer / Team Manager",
          skills:[
            { name:"Project Management"},
            { name:"Back End"},
            { name:"Customer Support"}
          ]
        },
        {
          name:"Project Management",
          skills:[
            { name:"Scrum"},
            { name:"Agile Development"},
            { name:"Git TFS"},
            { name:"Teamwork"},
            { name:"Jira Fogbugz"}
          ]
        },
        {
          name:"Back End",
          skills:[
            {name:"Webservices(SOAP)"},
            {name:"Payment Gateway (2 party / 3 party)"},
            {name:"NodeJs"},
            {name:"Meteor"},
            {name:"DevOps"},
            {name:"Webservices(REST)"}
          ]
        },
        {
          name:"Customer Support",
          skills:[
            { name:"Tailored software development"}
          ]
        }
      ],
      url:"https://mx.linkedin.com/in/rene-robles-6a05a87a"
    },// \rene
    //den
    {
      id:4,
      image:"dvazquez2.jpg",
      name:"Denisse Vázquez",
      firstName:"Denisse",
      fullName:"Rocío Denisse Vázquez Miguel",
      title:"Windows Server Specialist / Web Services Consultant",
      description:"Software developer specialized in .Net solutions and Invoicing Web Services, SQL Server Management, And complex Systems designer.",
      areas:[
        {
          name:"Windows Specialist / Web Services",
          skills:[
            { name:"Back End"},
            { name:"Project Management"},
            { name:"SysAdmin"},
          ]
        },
        {
          name:"Back End",
          skills:[
            { name:"Webservices(ASPX)"},
            { name:"NodeJs"},
            { name:"REST"}
          ]
        },
        {
          name:"Project Management",
          skills:[
            { name:"Teamwork"},
            { name:"Agile Development"}
          ]
        },
        {
          name:"SysAdmin/DBA",
          skills:[
            { name:"Team Foundation Server"},
            { name:"Active Directory"},
            { name:"Search Engine Implementation"},
            { name:"(Apache Solr, Elastic Search)"},
            { name:"IIS"},
            { name:"SQL / NoSQL"}
          ]
        }
      ],
      url:"https://mx.linkedin.com/in/martinroldanaraujo"
    },// \den
    //luis
    {
      id:5,
      image:"ecarbajal.jpg",
      name:"Enrique Carbajal",
      firstName:"Enrique",
      fullName:"Luis Enrique Carbajal Hernández",
      title:"Database Designer / Business Logic Developer",
      description:"Manage, plan, analize, design and evaluate evaluate informatic systems to operate, control and take strategic desicion taking.",
      areas:[
        {
          name:"Database / Business Logic",
          skills:[
            { name:"Front End"},
            { name:"DBA"}
          ]
        },
        {
          name:"Front End",
          skills:[
            { name:"Jquery HTML / CSS "},
            { name:"SASS / LESS UX / UI "},
            { name:"Angular Bootstrap"},
            { name:"Materialize HUGO"}
          ]
        },
        {
          name:"DBA",
          skills:[
            { name:"SQL / NoSQL Hadoop"},
            { name:"Hive Impala"}
          ]
        }
      ]
      // url:"https://mx.linkedin.com/in/martinroldanaraujo"
    },// \luis
    //carlos
    {
      id:6,
      image:"carlos.jpg",
      name:"Carlos García",
      firstName:"Carlos",
      fullName:"Carlos Ignacio García",
      title:"Web Developer / Graphic Designer",
      description:"I am designer and front-end web developer, customizable web pages for all -Responsive Design- devices and custom development or adaptation of WordPress themes.",
      areas:[
        {
          first:true,
          name:"Front End / Graphic Designer",
          skills:[
            { name:"Web Developer"},
            { name:"Front End"},
            { name:"Graphic Designer"}
          ]
        },
        {
          name:"Front End",
          skills:[
            { name:"Jquery HTML / CSS "},
            { name:"SASS / LESS UX / UI "},
            { name:"Bootstrap"},
            { name:"Materialize"}
          ]
        },
        {
          name:"Graphic Design",
          skills:[
            { name:"Adobe Ilustrator"},
            { name:"Adobe Photoshop"},
            { name:"Corel Draw"},
            { name:"Wireframes"},
            { name:"Responsive Web Design"},
          ]
        }
      ]
      // url:"https://mx.linkedin.com/in/martinroldanaraujo"
    }// \carlos
  ];
  return team;
});
