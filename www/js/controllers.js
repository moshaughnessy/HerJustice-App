angular.module('starter.controllers', [])
// angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
// angular.module('ui.bootstrap.demo')

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('FAQCtrl', function($scope,$window) {
    $scope.courts = [
      { title: 'General Family Court', id: 1 },
      { title: 'Custody/Visitation Court', id: 2 }
    ];
    $scope.courtSelected = $scope.courts[0];  
})
.controller('courtFAQ',function($scope){
    $scope.family=[
	  { Question: 'Can the order of protection include the parties’ children?',
		Answer: 'Yes.  The order can include the parties’ children and direct that the respondent “stay away” from or “refrain from” harassing the children or otherwise committing a family offense against them.  Typically, courts will grant this relief where the children have been victims of domestic violence directly at the hands of respondent rather than indirectly.  The order will likely state that it is subject to other Family Court orders, including  orders of visitation.' },
	  { Question: 'Must parties to an order of protection have been in a long term dating relationship?',
		Answer: 'No.  A 2008 law extends civil orders of protection to people who have had an "intimate relationship" with their alleged abusers and includes intimate partners, including dating couples, same-sex couples and teenage couples. The victims need not ever have lived with their abusers nor have been sexually intimate with them for the relationship to qualify under the law.  See FCA §§ 812, 821, 822.' },
	  { Question: 'Can my client get a five-year order of protection?',
		Answer: 'Yes.  If she proves “aggravating circumstances.”  See FCA §§ 842 and 827. ' },
	  { Question: 'Do I have to get a subpoena for records from the NYPD so-ordered by the court?',
		Answer: 'Yes.  N.Y. C.P.L.R. § 2306 provides that all subpoenas to municipal agencies, such as NYPD, requiring production of records must be so-ordered by the court.' },
      { Question: 'If my client fled due to an incident of domestic violence, can she return to the parties’ home to get her belongings?',
		Answer: 'Yes.  Under FCA § 442, the court can issue an order allowing a party to return to the parties’ home to get her belongings with police accompaniment.  Attorneys can request that this relief be granted in a temporary or final order of protection.' },
	  { Question: 'Can a Family Court order of protection be extended before it expires?',
		Answer: 'Yes.  Pursuant to a 2010 law, under FCA § 842 an order of protection can be extended for “good cause.”  In a 2016 case, the Appellate Division, Second Department, defined “good cause” to include “the nature of the relationship between the parties, taking into account their former relationship, the circumstances leading up to the entry of the initial order of protection, and the state of the relationship at the time of the request for an extension; the frequency of interaction between the parties; any subsequent instances of domestic violence or violations of the existing order of protection; and whether the current circumstances are such that concern for the safety and well-being of the petitioner is reasonable .”  Molloy v. Molloy, 2016 NY Slip Op 00366, App. Div. 2d Dep’t (Jan. 20, 2016).' },
	  { Question: 'Must the courts recognize orders of protection issued by courts in other jurisdictions?',
		Answer: 'Yes.  Under the 1994 federal Violence Against Women Act, courts must give “full, faith and credit” to orders issued by all other states, territories and tribunal courts so long as (1) the issuing court has jurisdiction over the parties and the subject matter according to its law; and (2) the defendant/respondent was given reasonable notice and an opportunity to be heard sufficient to protect his or her due process rights.  See 18 U.S.C. § 2265(a),(b).  The Family Court Act was amended to incorporate this provision.  See FCA § 154-e.' }
   ];
    
    $scope.custody=[
       { Question: 'What is Joint Custody?',Answer: '“Joint legal custody” is when each parent shares in the decision-making with regard to the subject child/ren. “Joint physical custody” is the shared actual physical possession of the child “Joint physical custody” means that the child is living with one parent or the other in accordance with a set schedule, and the implication is that this is more or less equal time. Joint decision-making and shared custody presupposes an amicable relationship between the parties. When the parents are “antagonistic and embattled”, joint custody is generally inappropriate, as when there is domestic violence – abusers often try to use their status as joint custodians to further control and manipulate the other parent. Court decisions are trending towards awards of “joint custody” and parties may feel pressured to settle on this. Advocacy is required to avoid situations where joint custody would create and unsafe. Note: joint physical custody can impact a determination of child support.' },
        { Question: 'Can an order of custody/visitation be modified?', Answer: 'Yes. On a showing of a “change in circumstances”, the court may consider a change in custody, as long as such a change is in the best interests of the child.' },
        { Question: 'Can a court order that has visitation be supervised?', Answer: 'Yes. If there are safety concerns, or if there has been a prolonged separation between the child and the parent.  Supervised visitation is generally short-term, eventually leading to more expanded visitation. Although there are a number of organizations which provide supervised visitation services, there are waiting lists and fees associated with many programs. Court-ordered institutional supervised visits generally result in a report submitted to the court which describes how the visitation went, and is generally limited to only 3 sessions. More long-term supervision may be provided by a family member or friend who is willing to participate. It is advisable to interview any proposed supervisor to inquire whether they understand the responsibilities and possible negative consequences of supervising visits, especially in domestic violence situations.' },
        { Question: 'Can there be a court order where there is no visitation at all?', Answer: 'Yes, but only in very rare and egregious instances. As courts start from a position that each parent is fit and that it is inherently in the best interest of a child to have a significant relationship with each parent, it must be proven that the non-custodial parent is unfit and that it is in the best interest of the child that there be no visitation. Domestic violence against the other parent is NOT, in and of itself, a basis for a denial of visitation outright.' }
    ];
    $scope.show = false;
    $scope.toggleTab=function()
    {
        if ($scope.show==false) {
            $scope.show=true;   
        } else {
            $scope.show=false;
        }
    }
})
.controller('subLawCtrl', function ($scope) {
    $scope.current =
    { procedure: null, lawType: null };
    

    $scope.meta =
    {
        proceduralList:
        [
            {
                id: 1,
                name: 'Statutes', 
                lawTypeList:
                [
                    {
                        id: 1,
                        name: 'Family Court'
                    },
                    { 
                        id: 2,
                        name: 'Domestic Relations' 
                    },
                    {   id: 3,
                        name: 'Court Rules' 
                    }
                ]
            },
            {
                id: 2,
                name: 'Case Law', 
                lawTypeList:
                [
                    {
                        id: 1,
                        name: 'Custody'
                    },
                    {
                        id: 2,
                        name: 'Visitation'
                    }
                ]
            }
        ]
    };


    // initiate an array to hold all active tabs
    $scope.activeTabs = [];

    // check if the tab is active
    $scope.isOpenTab = function (tab) {
        // check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            // if so, return true
            return true;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (tab) {
        // check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            // if it's not, add it!
            $scope.activeTabs.push(tab);
        }
    }
})

.controller('stipLangCtrl', function ($scope) {

    $scope.checkDirectory =
        {
            
            checkList:
                [
                    {
                        id: 1,
                        title: 'Grounds',
                        list: 'Resolved in whose favor?',
                        list1: 'Party not taking divorce withdraws complaint or answer/counterclaim?',
                        list2: 'Standard is no-fault grounds'
                    },
                    {
                        id: 2,
                        title: 'Marital Residence',
                        list: 'Who will remain in home?',
                        list1: 'Who will make mortgage payments?',
                        list2: 'Who will pay real estate taxes?',
                        list3: 'Who is entitled to tax deductions arising from mortgage/real estate tax payments?',
                        list4: 'When is title to be transferred (e.g., when mortgage fully paid)?',
                        list5: 'Foreclosure issues',
                        list6: 'Lease adjustment necessary?',
                        list7: 'Responsibility for condo/coop maintenance'
                    }
                ]
        };


    // initiate an array to hold all active tabs
    $scope.activeTabs = [];

    // check if the tab is active
    $scope.isOpenTab = function (tab) {
        // check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            // if so, return true
            return true;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (tab) {
        // check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            // if it's not, add it!
            $scope.activeTabs.push(tab);
        }
    }
})

.controller('courtHouseCtrl', function ($scope) {
    $scope.current =
    {
        court: null,
        borough: null,
        judge: null
    };


    $scope.meta =
    {
        courtList:
        [
            {
                id: 1,
                name: 'Family Court',
                boroughList:
                [
                    {
                        id: 1,
                        name: 'Manhattan'
                    },
                    {
                        id: 2,
                        name: 'Brooklyn'
                    },
                    {
                        id: 3,
                        name: 'Queens'
                    },
                    {
                        id: 4,
                        name: 'Bronx'
                    },
                    {
                        id: 5,
                        name: 'Staten Island'
                    }
                ]
            },
            {
                id: 2,
                name: 'Supreme Court Civil',
                boroughList:
                [
                    {
                        id: 1,
                        name: 'Manhattan'
                    },
                    {
                        id: 2,
                        name: 'Brooklyn'
                    },
                    {
                        id: 3,
                        name: 'Queens'
                    },
                    {
                        id: 4,
                        name: 'Bronx'
                    },
                    {
                        id: 5,
                        name: 'Staten Island'
                    }
                ]
            },
            {
                id: 3,
                name: 'Supreme Court Criminal',
                boroughList:
                [
                    {
                        id: 1,
                        name: 'Manhattan'
                    },
                    {
                        id: 2,
                        name: 'Brooklyn'
                    },
                    {
                        id: 3,
                        name: 'Queens'
                    },
                    {
                        id: 4,
                        name: 'Bronx'
                    },
                    {
                        id: 5,
                        name: 'Staten Island'
                    }
                ]
            }
        ]
    };


    // initiate an array to hold all active tabs
    $scope.activeTabs = [];

    // check if the tab is active
    $scope.isOpenTab = function (tab) {
        // check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            // if so, return true
            return true;
        } else {
            // if not, return false
            return false;
        }
    }

    // function to 'open' a tab
    $scope.openTab = function (tab) {
        // check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            // if it's not, add it!
            $scope.activeTabs.push(tab);
        }
    }

    $scope.judgeDirectoryHead =
        {
            judgeListHead:
                [
                    {
                        id: 1,
                        name: 'Name',
                        room: 'Room',
                        phone: 'Phone'
                    }
                ]

        };

    $scope.judgeDirectory =
        {
            
            judgeList:
                [
                    {
                        id: 1,
                        name: 'John Lock',
                        room: '1A',
                        phone: '585-555-3333'
                    },
                    {
                        id: 2,
                        name: 'Christine Smith',
                        room: '1B',
                        phone: '585-555-3333'
                    }
                ]
        };
})


.controller('supportCtrl', function($scope) {
    //$scope.show = false;
     $scope.submit = function() {
      $scope.show = true;
      var percentages = [.17, .25, .29, .31, .35]
      var percent = percentages[$scope.numChildren - 1]

      if ($scope.income > 141000) {
        $scope.output = $scope.income * percent + " \n Note: Income greater than $141,000, court may decide not to use " + percent *100 + "% as a guideline"
      }
      if ($scope.numChildren >5) {
        percent = .35
      }
      $scope.output = +($scope.income * percent).toFixed(8)

      if (isNan($scope.output)) {
        $scope.output = "Inputs must be numbers"
      }
     }
})


.controller('maintenanceCtrl', function($scope) {
    $scope.submit = function() {
        $scope.show = true;
        if ($scope.choice == 'nonCustodial') {
            var amt1 = .2 * $scope.payorIncome - .25 * $scope.payeeIncome
            var amt2 = .4 * ($scope.payorIncome + $scope.payeeIncome) - $scope.payeeIncome
            if (amt1 < amt2) {
                $scope.output = amt1
            }
            else {
                $scope.output = amt2
            }
        }
        else {
            var amt1 = .3 * $scope.payorIncome - .2 * $scope.payeeIncome
            var amt2 = .4 * ($scope.payorIncome + $scope.payeeIncome) - $scope.payeeIncome
            if (amt1 < amt2) {
                $scope.output = amt1
            }
            else {
                $scope.output = amt2
            }
        }

    }
})
.controller('PlaylistsCtrl', function($scope) {

})
.controller('businessDaysCtrl', function($scope) {
    $scope.submit = function() {
        $scope.show = true;
        // daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31 ,30, 31, 30, 31]
        var date = new Date()
        var today = new Date();
        var todayDate = today.toISOString().substring(0, 10)
        // var month = date.getMonth()
        // var day = date.getDate()
        // var year = date.getYear()
        // var dayOfWeek = date.getDay()
        // var daysAway = $scope.businessDaysNum

        // while (daysAway != 0) {
        //     if (dayOfWeek != 0 && dayOfWeek != 6) {
        //         day ++;
        //         dayOfWeek ++; 
        //         dayOfWeek = (dayOfWeek % 7);
        //         daysAway --;
        //     }

        // }
        //var moment = require('moment-business-days')
        //var july4th = '07-04';
        // var laborDay = '09-07';
         
        // moment.locale('us', {
        //    holidays: [july4th, laborDay],
        //    holidayFormat: 'MM-DD' 
        // });
        // var today = new Date();
        // var todayDate = today.toISOString().substring(0, 10)
        // moment(todayDate , 'YYYY-MM-DD').businessAdd(3)._d
        $scope.output = todayDate
    }

});


