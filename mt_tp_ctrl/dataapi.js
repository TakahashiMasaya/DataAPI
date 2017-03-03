"use strict";
(function($, window, document, undefined) {
$.dataapi={
	_LIST_TEMPLATES:{
  "18": {
    "items": [
      {
        "id": "1973",
        "createdBy": {
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "displayName": "TakahashiMasaya"
        },
        "modifiedDate": "2016-10-28T08:34:42+00:00",
        "text": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <meta name=\"generator\" content=\"<$mt:ProductName version=\"1\"$>\">\n    <title>Previewing your Comment - <$mt:BlogName encode_html=\"1\"$></title>\n    <$mt:Include module=\"HTML Head\"$>\n    <script type=\"text/javascript\">\n      var user = <$mt:UserSessionState$>;\n      var is_preview = true;\n    \n    <script src=\"<$mt:Link template=\"javascript\"$>\">\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <ul class=\"breadcrumb breadcrumb-list\">\n              <li class=\"breadcrumb-list-item\"><a href=\"<$mt:BlogURL encode_html=\"1\"$>\">Home</a></li>\n              <li class=\"breadcrumb-list-item\"><$mt:EntryTitle$></li>\n            </ul>\n            <div id=\"comment-preview-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2 class=\"title\">Previewing your Comment</h2>\n                <article id=\"comment-<$mt:CommentID$>\" class=\"comment<mt:IfCommentParent> comment-reply</mt:IfCommentParent><mt:IfCommenterIsEntryAuthor> entry-author-comment</mt:IfCommenterIsEntryAuthor>\">\n                  <header>\n                    <h3><mt:IfCommentParent><$mt:CommentAuthorLink$> replied to <a href=\"<mt:CommentParent><$mt:CommentLink$></mt:CommentParent>\">comment from <mt:CommentParent><$mt:CommentAuthor$></mt:CommentParent></a><mt:Else><$mt:CommentAuthorLink$></mt:IfCommentParent></h3>\n                    <a href=\"<$mt:CommentLink$>\"><time datetime=\"<$mt:CommentDate format_name=\"iso8601\"$>\"><$mt:CommentDate$></time></a>\n                  </header>\n                  <$mt:CommentBody$>\n                </article>\n                <$mt:Include module=\"Comment Form\"$>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "customFields": [],
        "name": "Comment Preview",
        "blog": {
          "id": "18"
        },
        "linkToFile": "",
        "createdDate": "2016-10-28T08:34:42+00:00",
        "updatable": true,
        "type": "comment_preview"
      },
      {
        "linkToFile": "",
        "blog": {
          "id": "18"
        },
        "type": "comment_response",
        "updatable": true,
        "createdDate": "2016-10-28T08:34:41+00:00",
        "modifiedDate": "2016-10-28T08:34:41+00:00",
        "id": "1947",
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        },
        "name": "Comment Response",
        "customFields": [],
        "text": "<mt:If name=\"comment_confirmation\">\n  <$mt:Var name=\"page_title\" value=\"Confirmation...\"$>\n  <$mt:Var name=\"message\" value=\"<p class=\"message success\">Your comment has been submitted!</p>\"$>\n<mt:Else name=\"comment_pending\">\n  <$mt:Var name=\"page_title\" value=\"Thank you for commenting.\"$>\n  <$mt:Var name=\"message\" value=\"<p class=\"message success\">Your comment has been received and held for review by a blog administrator.</p>\"$>\n<mt:Else name=\"comment_error\">\n  <$mt:Var name=\"page_title\" value=\"Comment Submission Error\"$>\n  <mt:SetVarBlock name=\"message\"><p class=\"message error\">Your comment submission failed for the following reasons: <$mt:ErrorMessage encode_html=\"1\"$></p></mt:SetVarBlock>\n</mt:If>\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <meta name=\"description\" content=\"<$mt:EntryExcerpt remove_html=\"1\" encode_html=\"1\"$>\">\n    <title><$mt:BlogName encode_html=\"1\"$> - <$mt:Var name=\"page_title\" encode_html=\"1\"$></title>\n    <$mt:Include module=\"HTML Head\"$>\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <ul class=\"breadcrumb breadcrumb-list\">\n              <li class=\"breadcrumb-list-item\"><a href=\"<$mt:BlogURL encode_html=\"1\"$>\">Home</a></li>\n              <li class=\"breadcrumb-list-item\"><$mt:EntryTitle$></li>\n            </ul>\n            <div id=\"comment-response-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2 class=\"title\"><$mt:Var name=\"page_title\"$></h2>\n                <$mt:Var name=\"message\"$>\n                <p>Return to the <a href=\"<mt:If name=\"comment_error\">javascript:history.back()<mt:Else><$mt:EntryLink$></mt:If>\">original entry</a>.</p>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n"
      },
      {
        "modifiedDate": "2016-10-28T08:34:42+00:00",
        "id": "1960",
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        },
        "customFields": [],
        "name": "Dynamic Error",
        "text": "<!DOCTYPE html>\n<html lang=\"<$mt:BlogLanguage$>\">\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <title><$mt:BlogName encode_html=\"1\"$>: Page Not Found</title>\n    <$mt:Include module=\"HTML Head\"$>\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <div id=\"dynamic-error-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2>Page Not Found</h2>\n                <pre><$mt:ErrorMessage$></pre>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <$mt:Include module=\"Banner Footer\"$>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "linkToFile": "",
        "blog": {
          "id": "18"
        },
        "type": "dynamic_error",
        "createdDate": "2016-10-28T08:34:42+00:00",
        "updatable": true
      },
      {
        "text": "<mt:ignore>=====================================\nblogid:19→01_blog DigestMovie\nblogid:20→02_blog DigestPost\n=====================================</mt:ignore>\n\n<$mt:setvar name=\"_HASH\" function=\"undef\"$>\n<mt:multiblog blog_ids=\"19\">\n<mt:categories show_empty=\"1\">\n<mt:setvarblock name=\"_cat_name\">cat_<$mt:categorybasename$></mt:setvarblock>\n<$mt:categorylabel setvar=\"_cat_lb\"$>\n<$mt:categorydescription setvar=\"_cat_dc\"$>\n<mt:if name=\"_cat_dc\" ne=\"\">\n<$mt:setvar name=\"_d\" function=\"undef\"$>\n<$mt:setvar name=\"_d\" key=\"title\" value=\"$_cat_lb\"$>\n<$mt:setvar name=\"_d\" key=\"body\" value=\"$_cat_dc\"$>\n<$mt:setvar name=\"_digestmovie\" key=\"$_cat_name\" value=\"$_d\"$>\n</mt:if>\n</mt:categories>\n<$mt:setvar name=\"_HASH\" key=\"digestmovie\" value=\"$_digestmovie\"$>\n</mt:multiblog>\n\n<mt:multiblog blog_ids=\"20\">\n<$mt:setvar name=\"_digest\" function=\"undef\"$>\n<mt:categories>\n<mt:setvarblock name=\"_cat_name\">cat_<$mt:categorybasename$></mt:setvarblock>\n<mt:entries lastn=\"1\">\n<$mt:setvar name=\"_d\" function=\"undef\"$>\n<$mt:entrytitle setvar=\"_et\"$>\n<$mt:entrybody setvar=\"_eb\"$>\n<$mt:setvar name=\"_d\" key=\"title\" value=\"$_et\"$>\n<$mt:setvar name=\"_d\" key=\"body\" value=\"$_eb\"$>\n<$mt:setvar name=\"_digest\" key=\"$_cat_name\" value=\"$_d\"$>\n</mt:entries>\n</mt:categories>\n<$mt:setvar name=\"_HASH\" key=\"digest\" value=\"$_digest\"$>\n</mt:multiblog>\n\n<$mt:var name=\"_HASH\" to_json=\"1\"$>",
        "name": "PCSP_M_JSON_DATA",
        "customFields": [],
        "createdBy": {
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "id": "1",
          "displayName": "TakahashiMasaya"
        },
        "id": "2319",
        "modifiedDate": "2016-12-06T01:38:46+00:00",
        "modifiedBy": {
          "displayName": "TakahashiMasaya",
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        },
        "updatable": true,
        "createdDate": "2016-12-05T14:37:14+00:00",
        "type": "custom",
        "blog": {
          "id": "18"
        },
        "linkToFile": ""
      },
      {
        "text": "<!DOCTYPE html>\n<html>\n    <head>\n        <title><$mt:ImageURL$></title>\n    </head>\n    <body id=\"uploaded-image-popup\" class=\"popup\" style=\"margin: 0;padding: 0;\">\n        <img src=\"<$mt:ImageURL$>\" width=\"<$mt:ImageWidth$>\" height=\"<$mt:ImageHeight$>\" alt=\"<$mt:ImageURL$>\" style=\"margin: 0;padding: 0;border: 0;\" />\n    </body>\n</html>\n",
        "name": "Popup Image",
        "customFields": [],
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        },
        "id": "1969",
        "modifiedDate": "2016-10-28T08:34:42+00:00",
        "updatable": true,
        "createdDate": "2016-10-28T08:34:42+00:00",
        "type": "popup_image",
        "blog": {
          "id": "18"
        },
        "linkToFile": ""
      },
      {
        "type": "search_results",
        "createdDate": "2016-10-28T08:34:41+00:00",
        "updatable": true,
        "linkToFile": "",
        "blog": {
          "id": "18"
        },
        "customFields": [],
        "name": "Search Results",
        "text": "<!DOCTYPE html>\n<html lang=\"<$mt:BlogLanguage$>\">\n  <head>\n    <script type=\"text/javascript\">\n      var user = <$mt:UserSessionState$>;\n    \n    <meta charset=\"<$mt:PublishCharset$>\">\n    <title><$mt:BlogName encode_html=\"1\"$> - Search Results</title>\n    <$mt:Include module=\"HTML Head\"$>\n    <script src=\"<$mt:Link template=\"javascript\"$>\">\n    <script>\n<mt:IfMoreResults>\n      function getResults(page) {\n        page = parseInt(page);\n        if (timer) window.clearTimeout(timer);\n        var xh = mtGetXmlHttp();\n        if (!xh) return false;\n        var res = results[page];\n        if (!res) return;\n        var url = res['next_url'];\n        if (!url) return;\n\n        xh.open('GET', url + '&format=js', true);\n        xh.onreadystatechange = function() {\n          if ( xh.readyState == 4 ) {\n            if ( xh.status && ( xh.status != 200 ) ) {\n              // error - ignore\n            } else {\n              try {\n                var page_results = eval(\"(\" + xh.responseText + \")\");\n                if ( page_results['error'] == null )\n                  results[page + 1] = page_results['result'];\n              } catch (e) {\n              }\n            }\n          }\n      };\n      xh.send(null);\n    }\n\n    function swapContent(direction) {\n      if ( direction == undefined ) direction = 1;\n      var page_span = document.getElementById('current-page');\n      if (!page_span) return true;\n      var next_page = direction + parseInt(page_span.innerHTML);\n      var res = results[next_page];\n      if (!res) return true;\n      var content = res['content'];\n      if (!content) return true;\n      var div = document.getElementById('search-results-main');\n      if (!div) return true;\n      div.innerHTML = content;\n      timer = window.setTimeout(\"getResults(\" + next_page + \")\", 1*1000);\n      window.scroll(0, 0);\n      return false;\n    }\n<mt:Else>\n  <mt:IfPreviousResults>\n    function swapContent(direction) {\n      return true;\n    }\n  </mt:IfPreviousResults>\n</mt:IfMoreResults>\n    \n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <div id=\"search-results-main\" class=\"main\" role=\"main\">\n<mt:SetVarTemplate id=\"search_results\" name=\"search_results\">\n  <mt:SearchResults>\n    <mt:SearchResultsHeader>\n              <section id=\"search-results\">\n                <span id=\"current-page\" class=\"hidden\"><$mt:CurrentPage$></span>\n                <h1 class=\"title\">\n      <MTIfStatic><mt:IfStraightSearch>\n                  Results matching &ldquo;<$mt:SearchString$>&rdquo;\n      </mt:IfStraightSearch></MTIfStatic>\n      <mt:IfTagSearch>\n                  Results tagged &ldquo;<$mt:SearchString$>&rdquo;\n      </mt:IfTagSearch>\n                </h1>\n    </mt:SearchResultsHeader>\n\n                <$mt:Include module=\"Entry Summary\" hide_counts=\"1\"$>\n\n    <mt:SearchResultsFooter>\n              </section>\n              <nav class=\"pagination\">\n                <ul>\n      <mt:IfMoreResults>\n                  <li><a rel=\"prev\" href=\"<$mt:NextLink encode_html=\"1\"$>\" onclick=\"return swapContent();\">Older entries</a></li>\n      </mt:IfMoreResults>\n      <mt:IfPreviousResults>\n                  <li><a rel=\"next\" href=\"<$mt:PreviousLink encode_html=\"1\"$>\" onclick=\"return swapContent(-1);\">Newer entries</a></li>\n      </mt:IfPreviousResults>\n                </ul>\n              </nav>\n    </mt:SearchResultsFooter>\n  </mt:SearchResults>\n</mt:SetVarTemplate>\n\n<$mt:Var name=\"search_results\"$>\n\n<mt:NoSearchResults>\n              <section>\n                <h1 class=\"search-results-header\">\n  <MTIfStatic><mt:IfStraightSearch>\n                  Results matching &ldquo;<$mt:SearchString$>&rdquo;\n  </mt:IfStraightSearch></MTIfStatic>\n  <mt:IfTagSearch>\n                  Results tagged &ldquo;<$mt:SearchString$>&rdquo;\n  </mt:IfTagSearch>\n                </h1>\n                <p>No results found for &ldquo;<$mt:SearchString$>&rdquo;.</p>\n              </section>\n</mt:NoSearchResults>\n\n<mt:NoSearch>\n              <section>\n                <h1 class=\"search-results-header\">Instructions</h1>\n                <p>By default, this search engine looks for all of the specified words in any order. To search for an exact phrase, enclose the phrase in quotes:</p>\n                <pre><code>\"movable type\"</code></pre>\n                <p>The search engine also supports the AND, OR, and NOT boolean operators:</p>\n                <pre><code>personal OR publishing</code></pre>\n                <pre><code>publishing NOT personal</code></pre>\n              </section>\n</mt:NoSearch>\n\n<mt:Ignore><!-- Used with the ajax search capability of the new search class --></mt:Ignore>\n<mt:IfMoreResults>\n              <script type=\"text/javascript\">\n                var div = document.getElementById('search-results');\n                var results = {\n                  '<$mt:CurrentPage$>': {\n                    'content': div.innerHTML,\n                    'next_url': '<$mt:NextLink$>'\n                  }\n                };\n                var timer = window.setTimeout(\"getResults(\" + <$mt:CurrentPage$> + \")\", 1*1000);\n              \n</mt:IfMoreResults>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "modifiedDate": "2016-10-28T08:34:41+00:00",
        "createdBy": {
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "id": "1",
          "displayName": "TakahashiMasaya"
        },
        "id": "1943"
      }
    ],
    "totalResults": "6"
  },
  "19": {
    "items": [
      {
        "type": "comment_preview",
        "customFields": [],
        "name": "Comment Preview",
        "id": "2010",
        "text": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <meta name=\"generator\" content=\"<$mt:ProductName version=\"1\"$>\">\n    <title>Previewing your Comment - <$mt:BlogName encode_html=\"1\"$></title>\n    <$mt:Include module=\"HTML Head\"$>\n    <script type=\"text/javascript\">\n      var user = <$mt:UserSessionState$>;\n      var is_preview = true;\n    \n    <script src=\"<$mt:Link template=\"javascript\"$>\">\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <ul class=\"breadcrumb breadcrumb-list\">\n              <li class=\"breadcrumb-list-item\"><a href=\"<$mt:BlogURL encode_html=\"1\"$>\">Home</a></li>\n              <li class=\"breadcrumb-list-item\"><$mt:EntryTitle$></li>\n            </ul>\n            <div id=\"comment-preview-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2 class=\"title\">Previewing your Comment</h2>\n                <article id=\"comment-<$mt:CommentID$>\" class=\"comment<mt:IfCommentParent> comment-reply</mt:IfCommentParent><mt:IfCommenterIsEntryAuthor> entry-author-comment</mt:IfCommenterIsEntryAuthor>\">\n                  <header>\n                    <h3><mt:IfCommentParent><$mt:CommentAuthorLink$> replied to <a href=\"<mt:CommentParent><$mt:CommentLink$></mt:CommentParent>\">comment from <mt:CommentParent><$mt:CommentAuthor$></mt:CommentParent></a><mt:Else><$mt:CommentAuthorLink$></mt:IfCommentParent></h3>\n                    <a href=\"<$mt:CommentLink$>\"><time datetime=\"<$mt:CommentDate format_name=\"iso8601\"$>\"><$mt:CommentDate$></time></a>\n                  </header>\n                  <$mt:CommentBody$>\n                </article>\n                <$mt:Include module=\"Comment Form\"$>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "linkToFile": "",
        "modifiedDate": "2016-10-28T08:35:18+00:00",
        "blog": {
          "id": "19"
        },
        "updatable": true,
        "createdDate": "2016-10-28T08:35:18+00:00",
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        }
      },
      {
        "type": "comment_response",
        "customFields": [],
        "name": "Comment Response",
        "id": "1984",
        "text": "<mt:If name=\"comment_confirmation\">\n  <$mt:Var name=\"page_title\" value=\"Confirmation...\"$>\n  <$mt:Var name=\"message\" value=\"<p class=\"message success\">Your comment has been submitted!</p>\"$>\n<mt:Else name=\"comment_pending\">\n  <$mt:Var name=\"page_title\" value=\"Thank you for commenting.\"$>\n  <$mt:Var name=\"message\" value=\"<p class=\"message success\">Your comment has been received and held for review by a blog administrator.</p>\"$>\n<mt:Else name=\"comment_error\">\n  <$mt:Var name=\"page_title\" value=\"Comment Submission Error\"$>\n  <mt:SetVarBlock name=\"message\"><p class=\"message error\">Your comment submission failed for the following reasons: <$mt:ErrorMessage encode_html=\"1\"$></p></mt:SetVarBlock>\n</mt:If>\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <meta name=\"description\" content=\"<$mt:EntryExcerpt remove_html=\"1\" encode_html=\"1\"$>\">\n    <title><$mt:BlogName encode_html=\"1\"$> - <$mt:Var name=\"page_title\" encode_html=\"1\"$></title>\n    <$mt:Include module=\"HTML Head\"$>\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <ul class=\"breadcrumb breadcrumb-list\">\n              <li class=\"breadcrumb-list-item\"><a href=\"<$mt:BlogURL encode_html=\"1\"$>\">Home</a></li>\n              <li class=\"breadcrumb-list-item\"><$mt:EntryTitle$></li>\n            </ul>\n            <div id=\"comment-response-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2 class=\"title\"><$mt:Var name=\"page_title\"$></h2>\n                <$mt:Var name=\"message\"$>\n                <p>Return to the <a href=\"<mt:If name=\"comment_error\">javascript:history.back()<mt:Else><$mt:EntryLink$></mt:If>\">original entry</a>.</p>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "linkToFile": "",
        "modifiedDate": "2016-10-28T08:35:17+00:00",
        "blog": {
          "id": "19"
        },
        "updatable": true,
        "createdDate": "2016-10-28T08:35:17+00:00",
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        }
      },
      {
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        },
        "createdDate": "2016-10-28T08:35:17+00:00",
        "blog": {
          "id": "19"
        },
        "updatable": true,
        "modifiedDate": "2016-10-28T08:35:17+00:00",
        "text": "<!DOCTYPE html>\n<html lang=\"<$mt:BlogLanguage$>\">\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <title><$mt:BlogName encode_html=\"1\"$>: Page Not Found</title>\n    <$mt:Include module=\"HTML Head\"$>\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <div id=\"dynamic-error-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2>Page Not Found</h2>\n                <pre><$mt:ErrorMessage$></pre>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <$mt:Include module=\"Banner Footer\"$>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "linkToFile": "",
        "name": "Dynamic Error",
        "id": "1982",
        "type": "dynamic_error",
        "customFields": []
      },
      {
        "customFields": [],
        "type": "index",
        "id": "2318",
        "name": "PCSP_I_JSON_DATA",
        "templateType": "",
        "linkToFile": "",
        "text": "<$mt:include module=\"PCSP_M_JSON_DATA\" parent=\"1\"$>",
        "outputFile": "../test.json",
        "modifiedDate": "2016-12-05T14:39:02+00:00",
        "modifiedBy": {
          "id": "1",
          "displayName": "TakahashiMasaya",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        },
        "updatable": true,
        "buildType": "Static",
        "blog": {
          "id": "19"
        },
        "createdBy": {
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "displayName": "TakahashiMasaya",
          "id": "1"
        },
        "createdDate": "2016-12-05T11:51:42+00:00"
      },
      {
        "createdBy": {
          "id": "1",
          "displayName": "TakahashiMasaya",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        },
        "createdDate": "2016-10-28T08:35:17+00:00",
        "updatable": true,
        "blog": {
          "id": "19"
        },
        "modifiedDate": "2016-10-28T08:35:17+00:00",
        "linkToFile": "",
        "text": "<!DOCTYPE html>\n<html>\n    <head>\n        <title><$mt:ImageURL$></title>\n    </head>\n    <body id=\"uploaded-image-popup\" class=\"popup\" style=\"margin: 0;padding: 0;\">\n        <img src=\"<$mt:ImageURL$>\" width=\"<$mt:ImageWidth$>\" height=\"<$mt:ImageHeight$>\" alt=\"<$mt:ImageURL$>\" style=\"margin: 0;padding: 0;border: 0;\" />\n    </body>\n</html>\n",
        "id": "1985",
        "name": "Popup Image",
        "customFields": [],
        "type": "popup_image"
      },
      {
        "blog": {
          "id": "19"
        },
        "updatable": true,
        "createdDate": "2016-10-28T08:35:18+00:00",
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png"
        },
        "text": "<!DOCTYPE html>\n<html lang=\"<$mt:BlogLanguage$>\">\n  <head>\n    <script type=\"text/javascript\">\n      var user = <$mt:UserSessionState$>;\n    \n    <meta charset=\"<$mt:PublishCharset$>\">\n    <title><$mt:BlogName encode_html=\"1\"$> - Search Results</title>\n    <$mt:Include module=\"HTML Head\"$>\n    <script src=\"<$mt:Link template=\"javascript\"$>\">\n    <script>\n<mt:IfMoreResults>\n      function getResults(page) {\n        page = parseInt(page);\n        if (timer) window.clearTimeout(timer);\n        var xh = mtGetXmlHttp();\n        if (!xh) return false;\n        var res = results[page];\n        if (!res) return;\n        var url = res['next_url'];\n        if (!url) return;\n\n        xh.open('GET', url + '&format=js', true);\n        xh.onreadystatechange = function() {\n          if ( xh.readyState == 4 ) {\n            if ( xh.status && ( xh.status != 200 ) ) {\n              // error - ignore\n            } else {\n              try {\n                var page_results = eval(\"(\" + xh.responseText + \")\");\n                if ( page_results['error'] == null )\n                  results[page + 1] = page_results['result'];\n              } catch (e) {\n              }\n            }\n          }\n      };\n      xh.send(null);\n    }\n\n    function swapContent(direction) {\n      if ( direction == undefined ) direction = 1;\n      var page_span = document.getElementById('current-page');\n      if (!page_span) return true;\n      var next_page = direction + parseInt(page_span.innerHTML);\n      var res = results[next_page];\n      if (!res) return true;\n      var content = res['content'];\n      if (!content) return true;\n      var div = document.getElementById('search-results-main');\n      if (!div) return true;\n      div.innerHTML = content;\n      timer = window.setTimeout(\"getResults(\" + next_page + \")\", 1*1000);\n      window.scroll(0, 0);\n      return false;\n    }\n<mt:Else>\n  <mt:IfPreviousResults>\n    function swapContent(direction) {\n      return true;\n    }\n  </mt:IfPreviousResults>\n</mt:IfMoreResults>\n    \n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <div id=\"search-results-main\" class=\"main\" role=\"main\">\n<mt:SetVarTemplate id=\"search_results\" name=\"search_results\">\n  <mt:SearchResults>\n    <mt:SearchResultsHeader>\n              <section id=\"search-results\">\n                <span id=\"current-page\" class=\"hidden\"><$mt:CurrentPage$></span>\n                <h1 class=\"title\">\n      <MTIfStatic><mt:IfStraightSearch>\n                  Results matching &ldquo;<$mt:SearchString$>&rdquo;\n      </mt:IfStraightSearch></MTIfStatic>\n      <mt:IfTagSearch>\n                  Results tagged &ldquo;<$mt:SearchString$>&rdquo;\n      </mt:IfTagSearch>\n                </h1>\n    </mt:SearchResultsHeader>\n\n                <$mt:Include module=\"Entry Summary\" hide_counts=\"1\"$>\n\n    <mt:SearchResultsFooter>\n              </section>\n              <nav class=\"pagination\">\n                <ul>\n      <mt:IfMoreResults>\n                  <li><a rel=\"prev\" href=\"<$mt:NextLink encode_html=\"1\"$>\" onclick=\"return swapContent();\">Older entries</a></li>\n      </mt:IfMoreResults>\n      <mt:IfPreviousResults>\n                  <li><a rel=\"next\" href=\"<$mt:PreviousLink encode_html=\"1\"$>\" onclick=\"return swapContent(-1);\">Newer entries</a></li>\n      </mt:IfPreviousResults>\n                </ul>\n              </nav>\n    </mt:SearchResultsFooter>\n  </mt:SearchResults>\n</mt:SetVarTemplate>\n\n<$mt:Var name=\"search_results\"$>\n\n<mt:NoSearchResults>\n              <section>\n                <h1 class=\"search-results-header\">\n  <MTIfStatic><mt:IfStraightSearch>\n                  Results matching &ldquo;<$mt:SearchString$>&rdquo;\n  </mt:IfStraightSearch></MTIfStatic>\n  <mt:IfTagSearch>\n                  Results tagged &ldquo;<$mt:SearchString$>&rdquo;\n  </mt:IfTagSearch>\n                </h1>\n                <p>No results found for &ldquo;<$mt:SearchString$>&rdquo;.</p>\n              </section>\n</mt:NoSearchResults>\n\n<mt:NoSearch>\n              <section>\n                <h1 class=\"search-results-header\">Instructions</h1>\n                <p>By default, this search engine looks for all of the specified words in any order. To search for an exact phrase, enclose the phrase in quotes:</p>\n                <pre><code>\"movable type\"</code></pre>\n                <p>The search engine also supports the AND, OR, and NOT boolean operators:</p>\n                <pre><code>personal OR publishing</code></pre>\n                <pre><code>publishing NOT personal</code></pre>\n              </section>\n</mt:NoSearch>\n\n<mt:Ignore><!-- Used with the ajax search capability of the new search class --></mt:Ignore>\n<mt:IfMoreResults>\n              <script type=\"text/javascript\">\n                var div = document.getElementById('search-results');\n                var results = {\n                  '<$mt:CurrentPage$>': {\n                    'content': div.innerHTML,\n                    'next_url': '<$mt:NextLink$>'\n                  }\n                };\n                var timer = window.setTimeout(\"getResults(\" + <$mt:CurrentPage$> + \")\", 1*1000);\n              \n</mt:IfMoreResults>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "linkToFile": "",
        "modifiedDate": "2016-10-28T08:35:18+00:00",
        "type": "search_results",
        "customFields": [],
        "name": "Search Results",
        "id": "2005"
      }
    ],
    "totalResults": "6"
  },
  "20": {
    "totalResults": "6",
    "items": [
      {
        "updatable": true,
        "customFields": [],
        "name": "Comment Preview",
        "linkToFile": "",
        "createdBy": {
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "displayName": "TakahashiMasaya"
        },
        "id": "2019",
        "text": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <meta name=\"generator\" content=\"<$mt:ProductName version=\"1\"$>\">\n    <title>Previewing your Comment - <$mt:BlogName encode_html=\"1\"$></title>\n    <$mt:Include module=\"HTML Head\"$>\n    <script type=\"text/javascript\">\n      var user = <$mt:UserSessionState$>;\n      var is_preview = true;\n    \n    <script src=\"<$mt:Link template=\"javascript\"$>\">\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <ul class=\"breadcrumb breadcrumb-list\">\n              <li class=\"breadcrumb-list-item\"><a href=\"<$mt:BlogURL encode_html=\"1\"$>\">Home</a></li>\n              <li class=\"breadcrumb-list-item\"><$mt:EntryTitle$></li>\n            </ul>\n            <div id=\"comment-preview-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2 class=\"title\">Previewing your Comment</h2>\n                <article id=\"comment-<$mt:CommentID$>\" class=\"comment<mt:IfCommentParent> comment-reply</mt:IfCommentParent><mt:IfCommenterIsEntryAuthor> entry-author-comment</mt:IfCommenterIsEntryAuthor>\">\n                  <header>\n                    <h3><mt:IfCommentParent><$mt:CommentAuthorLink$> replied to <a href=\"<mt:CommentParent><$mt:CommentLink$></mt:CommentParent>\">comment from <mt:CommentParent><$mt:CommentAuthor$></mt:CommentParent></a><mt:Else><$mt:CommentAuthorLink$></mt:IfCommentParent></h3>\n                    <a href=\"<$mt:CommentLink$>\"><time datetime=\"<$mt:CommentDate format_name=\"iso8601\"$>\"><$mt:CommentDate$></time></a>\n                  </header>\n                  <$mt:CommentBody$>\n                </article>\n                <$mt:Include module=\"Comment Form\"$>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "createdDate": "2016-10-28T08:36:21+00:00",
        "modifiedDate": "2016-10-28T08:36:21+00:00",
        "type": "comment_preview",
        "blog": {
          "id": "20"
        }
      },
      {
        "type": "comment_response",
        "blog": {
          "id": "20"
        },
        "modifiedDate": "2016-10-28T08:36:21+00:00",
        "createdDate": "2016-10-28T08:36:21+00:00",
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "id": "1"
        },
        "id": "2022",
        "text": "<mt:If name=\"comment_confirmation\">\n  <$mt:Var name=\"page_title\" value=\"Confirmation...\"$>\n  <$mt:Var name=\"message\" value=\"<p class=\"message success\">Your comment has been submitted!</p>\"$>\n<mt:Else name=\"comment_pending\">\n  <$mt:Var name=\"page_title\" value=\"Thank you for commenting.\"$>\n  <$mt:Var name=\"message\" value=\"<p class=\"message success\">Your comment has been received and held for review by a blog administrator.</p>\"$>\n<mt:Else name=\"comment_error\">\n  <$mt:Var name=\"page_title\" value=\"Comment Submission Error\"$>\n  <mt:SetVarBlock name=\"message\"><p class=\"message error\">Your comment submission failed for the following reasons: <$mt:ErrorMessage encode_html=\"1\"$></p></mt:SetVarBlock>\n</mt:If>\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <meta name=\"description\" content=\"<$mt:EntryExcerpt remove_html=\"1\" encode_html=\"1\"$>\">\n    <title><$mt:BlogName encode_html=\"1\"$> - <$mt:Var name=\"page_title\" encode_html=\"1\"$></title>\n    <$mt:Include module=\"HTML Head\"$>\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <ul class=\"breadcrumb breadcrumb-list\">\n              <li class=\"breadcrumb-list-item\"><a href=\"<$mt:BlogURL encode_html=\"1\"$>\">Home</a></li>\n              <li class=\"breadcrumb-list-item\"><$mt:EntryTitle$></li>\n            </ul>\n            <div id=\"comment-response-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2 class=\"title\"><$mt:Var name=\"page_title\"$></h2>\n                <$mt:Var name=\"message\"$>\n                <p>Return to the <a href=\"<mt:If name=\"comment_error\">javascript:history.back()<mt:Else><$mt:EntryLink$></mt:If>\">original entry</a>.</p>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "name": "Comment Response",
        "updatable": true,
        "customFields": [],
        "linkToFile": ""
      },
      {
        "id": "2031",
        "createdBy": {
          "id": "1",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "displayName": "TakahashiMasaya"
        },
        "text": "<!DOCTYPE html>\n<html lang=\"<$mt:BlogLanguage$>\">\n  <head>\n    <meta charset=\"<$mt:PublishCharset$>\">\n    <title><$mt:BlogName encode_html=\"1\"$>: Page Not Found</title>\n    <$mt:Include module=\"HTML Head\"$>\n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <div id=\"dynamic-error-main\" class=\"main\" role=\"main\">\n              <section>\n                <h2>Page Not Found</h2>\n                <pre><$mt:ErrorMessage$></pre>\n              </section>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <$mt:Include module=\"Banner Footer\"$>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </script></body>\n</html>\n",
        "customFields": [],
        "updatable": true,
        "name": "Dynamic Error",
        "linkToFile": "",
        "type": "dynamic_error",
        "blog": {
          "id": "20"
        },
        "modifiedDate": "2016-10-28T08:36:21+00:00",
        "createdDate": "2016-10-28T08:36:21+00:00"
      },
      {
        "createdDate": "2016-12-05T11:50:54+00:00",
        "modifiedDate": "2016-12-05T14:44:33+00:00",
        "modifiedBy": {
          "displayName": "TakahashiMasaya",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "id": "1"
        },
        "templateType": "javascript",
        "blog": {
          "id": "20"
        },
        "type": "index",
        "linkToFile": "",
        "updatable": true,
        "name": "PCSP_I_JSON_DATA",
        "customFields": [],
        "text": "<$mt:include module=\"PCSP_M_JSON_DATA\" parent=\"1\"$>",
        "outputFile": "../test.json",
        "buildType": "Static",
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "id": "1"
        },
        "id": "2317"
      },
      {
        "updatable": true,
        "customFields": [],
        "name": "Popup Image",
        "linkToFile": "",
        "createdBy": {
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "displayName": "TakahashiMasaya",
          "id": "1"
        },
        "id": "2040",
        "text": "<!DOCTYPE html>\n<html>\n    <head>\n        <title><$mt:ImageURL$></title>\n    </head>\n    <body id=\"uploaded-image-popup\" class=\"popup\" style=\"margin: 0;padding: 0;\">\n        <img src=\"<$mt:ImageURL$>\" width=\"<$mt:ImageWidth$>\" height=\"<$mt:ImageHeight$>\" alt=\"<$mt:ImageURL$>\" style=\"margin: 0;padding: 0;border: 0;\" />\n    </body>\n</html>\n",
        "modifiedDate": "2016-10-28T08:36:21+00:00",
        "createdDate": "2016-10-28T08:36:21+00:00",
        "type": "popup_image",
        "blog": {
          "id": "20"
        }
      },
      {
        "createdBy": {
          "displayName": "TakahashiMasaya",
          "userpicUrl": "/mt/mt-static/support/assets_c/userpics/userpic-1-100x100.png",
          "id": "1"
        },
        "id": "2015",
        "text": "<!DOCTYPE html>\n<html lang=\"<$mt:BlogLanguage$>\">\n  <head>\n    <script type=\"text/javascript\">\n      var user = <$mt:UserSessionState$>;\n    \n    <meta charset=\"<$mt:PublishCharset$>\">\n    <title><$mt:BlogName encode_html=\"1\"$> - Search Results</title>\n    <$mt:Include module=\"HTML Head\"$>\n    <script src=\"<$mt:Link template=\"javascript\"$>\">\n    <script>\n<mt:IfMoreResults>\n      function getResults(page) {\n        page = parseInt(page);\n        if (timer) window.clearTimeout(timer);\n        var xh = mtGetXmlHttp();\n        if (!xh) return false;\n        var res = results[page];\n        if (!res) return;\n        var url = res['next_url'];\n        if (!url) return;\n\n        xh.open('GET', url + '&format=js', true);\n        xh.onreadystatechange = function() {\n          if ( xh.readyState == 4 ) {\n            if ( xh.status && ( xh.status != 200 ) ) {\n              // error - ignore\n            } else {\n              try {\n                var page_results = eval(\"(\" + xh.responseText + \")\");\n                if ( page_results['error'] == null )\n                  results[page + 1] = page_results['result'];\n              } catch (e) {\n              }\n            }\n          }\n      };\n      xh.send(null);\n    }\n\n    function swapContent(direction) {\n      if ( direction == undefined ) direction = 1;\n      var page_span = document.getElementById('current-page');\n      if (!page_span) return true;\n      var next_page = direction + parseInt(page_span.innerHTML);\n      var res = results[next_page];\n      if (!res) return true;\n      var content = res['content'];\n      if (!content) return true;\n      var div = document.getElementById('search-results-main');\n      if (!div) return true;\n      div.innerHTML = content;\n      timer = window.setTimeout(\"getResults(\" + next_page + \")\", 1*1000);\n      window.scroll(0, 0);\n      return false;\n    }\n<mt:Else>\n  <mt:IfPreviousResults>\n    function swapContent(direction) {\n      return true;\n    }\n  </mt:IfPreviousResults>\n</mt:IfMoreResults>\n    \n  </head>\n  <body>\n    <div id=\"container\">\n      <div id=\"container-inner\">\n        <header id=\"header\" role=\"banner\">\n          <div id=\"header-inner\">\n            <$mt:Include module=\"Banner Header\"$>\n            <$mt:Include module=\"Navigation\"$>\n          </div>\n        </header>\n        <div id=\"content\">\n          <div id=\"content-inner\">\n            <div id=\"search-results-main\" class=\"main\" role=\"main\">\n<mt:SetVarTemplate id=\"search_results\" name=\"search_results\">\n  <mt:SearchResults>\n    <mt:SearchResultsHeader>\n              <section id=\"search-results\">\n                <span id=\"current-page\" class=\"hidden\"><$mt:CurrentPage$></span>\n                <h1 class=\"title\">\n      <MTIfStatic><mt:IfStraightSearch>\n                  Results matching &ldquo;<$mt:SearchString$>&rdquo;\n      </mt:IfStraightSearch></MTIfStatic>\n      <mt:IfTagSearch>\n                  Results tagged &ldquo;<$mt:SearchString$>&rdquo;\n      </mt:IfTagSearch>\n                </h1>\n    </mt:SearchResultsHeader>\n\n                <$mt:Include module=\"Entry Summary\" hide_counts=\"1\"$>\n\n    <mt:SearchResultsFooter>\n              </section>\n              <nav class=\"pagination\">\n                <ul>\n      <mt:IfMoreResults>\n                  <li><a rel=\"prev\" href=\"<$mt:NextLink encode_html=\"1\"$>\" onclick=\"return swapContent();\">Older entries</a></li>\n      </mt:IfMoreResults>\n      <mt:IfPreviousResults>\n                  <li><a rel=\"next\" href=\"<$mt:PreviousLink encode_html=\"1\"$>\" onclick=\"return swapContent(-1);\">Newer entries</a></li>\n      </mt:IfPreviousResults>\n                </ul>\n              </nav>\n    </mt:SearchResultsFooter>\n  </mt:SearchResults>\n</mt:SetVarTemplate>\n\n<$mt:Var name=\"search_results\"$>\n\n<mt:NoSearchResults>\n              <section>\n                <h1 class=\"search-results-header\">\n  <MTIfStatic><mt:IfStraightSearch>\n                  Results matching &ldquo;<$mt:SearchString$>&rdquo;\n  </mt:IfStraightSearch></MTIfStatic>\n  <mt:IfTagSearch>\n                  Results tagged &ldquo;<$mt:SearchString$>&rdquo;\n  </mt:IfTagSearch>\n                </h1>\n                <p>No results found for &ldquo;<$mt:SearchString$>&rdquo;.</p>\n              </section>\n</mt:NoSearchResults>\n\n<mt:NoSearch>\n              <section>\n                <h1 class=\"search-results-header\">Instructions</h1>\n                <p>By default, this search engine looks for all of the specified words in any order. To search for an exact phrase, enclose the phrase in quotes:</p>\n                <pre><code>\"movable type\"</code></pre>\n                <p>The search engine also supports the AND, OR, and NOT boolean operators:</p>\n                <pre><code>personal OR publishing</code></pre>\n                <pre><code>publishing NOT personal</code></pre>\n              </section>\n</mt:NoSearch>\n\n<mt:Ignore><!-- Used with the ajax search capability of the new search class --></mt:Ignore>\n<mt:IfMoreResults>\n              <script type=\"text/javascript\">\n                var div = document.getElementById('search-results');\n                var results = {\n                  '<$mt:CurrentPage$>': {\n                    'content': div.innerHTML,\n                    'next_url': '<$mt:NextLink$>'\n                  }\n                };\n                var timer = window.setTimeout(\"getResults(\" + <$mt:CurrentPage$> + \")\", 1*1000);\n              \n</mt:IfMoreResults>\n            </div>\n            <aside class=\"widgets related\" role=\"complementary\">\n              <$mt:WidgetSet name=\"Related Contents\"$>\n            </aside>\n          </div>\n        </div>\n        <footer id=\"footer\" role=\"contentinfo\">\n          <div id=\"footer-inner\">\n            <$mt:Include module=\"Banner Footer\"$>\n          </div>\n        </footer>\n      </div>\n    </div>\n    <script src=\"<$mt:StaticWebPath encode_html=\"1\"$>jquery/jquery.min.js\">\n    <script src=\"<$mt:Link template=\"javascript_theme\" encode_html=\"1\">\">\n  </body>\n</html>\n",
        "updatable": true,
        "name": "Search Results",
        "customFields": [],
        "linkToFile": "",
        "type": "search_results",
        "blog": {
          "id": "20"
        },
        "modifiedDate": "2016-10-28T08:36:21+00:00",
        "createdDate": "2016-10-28T08:36:21+00:00"
      }
    ]
  }
}

}//	$.dataapi

})(jQuery, this, this.document);
