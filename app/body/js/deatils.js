var Chef = {
    init: function() {
        this.productImagePreview();
        this.menuToggle();
    },

    productImagePreview: function() {
        $(document).on('click', '.product-images li', function() {
            if (!$(this).hasClass('preview')) {
                var src = $(this).find('img').attr('src');
                $('.product-images .preview img').attr('src', src);
            }
        });
    },

    menuToggle: function() {
        $(document).on('click', '#menu .trigger', function() {
            // Toggle open and close icons
            $(this).find('img').each(function() {
                if ($(this).hasClass('hidden')) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            });

            // Toggle menu links
            $(this).siblings('.links').stop(true, true).slideToggle(200);

            // Toggle open class
            $('#menu').toggleClass('open');
        });
    },
};

$(function() {
    Chef.init();
});



