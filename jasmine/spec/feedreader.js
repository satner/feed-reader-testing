/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

       it('url property exists and its not empty', function () {
         allFeeds.forEach(function (object) {
           expect(object.hasOwnProperty('url') && object['url'].length !== 0).toBe(true);
         })
       });

       it('name property exists and its not empty', function () {
         allFeeds.forEach(function (object) {
           expect(object.hasOwnProperty('name') && object['name'].length !== 0).toBe(true);
         })
       });
    });

    describe('The menu', function() {
      it('menu is hidden by default', function() {
          expect(document.body.getAttribute('class')).toBe("menu-hidden");
      });

      it('unhide menu', function() {
        $('.menu-icon-link').trigger('click');
        expect(document.body.getAttribute('class')).toBe("");
      });

      it('hide menu', function() {
        $('.menu-icon-link').trigger('click');
        expect(document.body.getAttribute('class')).toBe("menu-hidden");
      });
    });

    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      it('loading feed is working', function(done) {
        expect(document.querySelector('.feed .entry')).not.toBe(null);
        done();
      });
    });

   describe('New Feed Selection', function() {
     let feedZero;

     beforeEach(function(done) {
       loadFeed(0, function() {
         feedZero = document.querySelector('.feed').innerHTML;
         loadFeed(1, function() {
           done();
         })
       });
     });

     it('loading different feeds', function(done) {
       expect(document.querySelector('.feed').innerHTML).not.toBe(feedZero);
       done();
     });
   });
}());
