jQuery( 'body' ).on('updated_checkout', function () {
    var method = woocommerce_params.chosen_shipping_method;
       jQuery( 'select.shipping_method, input[name^=shipping_method][type=radio]:checked, input[name^=shipping_method][type=hidden]' ).each( function( index, input ) {
         method = jQuery( this ).val();
         } );
         switch (true) { 
            case (method.indexOf('flexible_shipping_14_5') >= 0 ):  
                 jQuery( '#billing_state_field, #billing_postcode_field, #billing_city_field').hide(); 
                 if (jQuery('#billing_state').val() === '' || jQuery('#billing_postcode').val() === '' || jQuery('#billing_city').val() === '') { 
                    jQuery('#billing_state').attr('value', 'Самовывоз');
                    jQuery('#billing_postcode').attr('value', '64000');
                    jQuery('#billing_city').attr('value', 'Самовывоз');
                }
                 break;
            case ( method.indexOf('flexible_shipping_18_8') >= 0 ): 
                jQuery( '#billing_state_field, #billing_postcode_field, #billing_city_field').hide(); 
                if (jQuery('#billing_state').val() === '' || jQuery('#billing_postcode').val() === '' || jQuery('#billing_city').val() === '') { 
                    jQuery('#billing_state').attr('value', 'Пермский край');
                    jQuery('#billing_postcode').attr('value', '64000');
                    jQuery('#billing_city').attr('value', 'Пермь');
                }
                 break; 
            case ( method.indexOf('flexible_shipping_19_9') >= 0 ): 
                 jQuery( '#billing_state_field, #billing_postcode_field, #billing_city_field').hide();
                 if (jQuery('#billing_state').val() === '' || jQuery('#billing_postcode').val() === '' || jQuery('#billing_city').val() === '') { 
                    jQuery('#billing_state').attr('value', 'Пермский край');
                    jQuery('#billing_postcode').attr('value', '64000');
                    jQuery('#billing_city').attr('value', 'Пермь');
                } 
                  break;
            case (method.indexOf('flexible_shipping_15_6') >= 0 ):  
                 jQuery( '#billing_state_field, #billing_postcode_field, #billing_city_field').hide(); 
                 if (jQuery('#billing_state').val() === '' || jQuery('#billing_postcode').val() === '' || jQuery('#billing_city').val() === '') { 
                    jQuery('#billing_state').attr('value', 'Самовывоз');
                    jQuery('#billing_postcode').attr('value', '64000');
                    jQuery('#billing_city').attr('value', 'Самовывоз');
                }
                 break;      
             default: 
                 jQuery( '#billing_state_field, #billing_postcode_field, #billing_city_field').show(); //Показываем всё
                   }            
 } );






 jQuery( 'body' ).on('updated_checkout', function () {
    var method = woocommerce_params.chosen_shipping_method;
       jQuery( 'select.shipping_method, input[name^=shipping_method][type=radio]:checked, input[name^=shipping_method][type=hidden]' ).each( function( index, input ) {
         method = jQuery( this ).val();
         } );
         switch (true) { 
            case (method.indexOf('flexible_shipping_17_7') >= 0 ):  
                 jQuery( '#billing_state_field, #billing_postcode_field, #billing_city_field').show();
                 jQuery('#billing_state').attr('value', '');
                 jQuery('#billing_postcode').attr('value', '');
                 jQuery('#billing_city').attr('value', '');
                 break;
            default:
                jQuery( '#billing_state_field, #billing_postcode_field, #billing_city_field').hide(); 
                if (jQuery('#billing_state').val() === '' || jQuery('#billing_postcode').val() === '' || jQuery('#billing_city').val() === '') { 
                    jQuery('#billing_state').attr('value', 'Пермский край');
                    jQuery('#billing_postcode').attr('value', '64000');
                    jQuery('#billing_city').attr('value', 'Пермь');
                }     
         }            
 } );