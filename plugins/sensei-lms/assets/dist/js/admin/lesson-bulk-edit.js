jQuery((function(e){e("#the-list").on("click","#bulk-edit #bulk_edit ",(function(){var i=e("#bulk-edit"),s=new Array;i.find("#bulk-titles").children().each((function(){s.push(e(this).attr("id").replace(/^(ttle)/i,""))}));var n=e('input[name="_edit_lessons_nonce"]').val(),t=i.find("#sensei-edit-lesson-course").val(),a=i.find("#sensei-edit-lesson-complexity").val(),l=i.find("#sensei-edit-lesson-pass-required").val(),d=i.find("#sensei-edit-quiz-pass-percentage").val(),_=i.find("#sensei-edit-enable-quiz-reset").val();e.ajax({url:ajaxurl,type:"POST",async:!1,cache:!1,data:{action:"save_bulk_edit_book",security:n,sensei_edit_lesson_course:t,sensei_edit_complexity:a,sensei_edit_pass_required:l,sensei_edit_pass_percentage:d,sensei_edit_enable_quiz_reset:_,post_ids:s}})}))}));