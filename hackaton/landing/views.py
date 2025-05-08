from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import redirect

# Create your views here.
def home(request):
    if request.method == 'POST':
        form_type = request.POST.get('form_type')
        
        if form_type == 'registration':
            name = request.POST.get('name')
            email = request.POST.get('email')
            school = request.POST.get('school')
            
            # TODO: Add logic to save registration data
            messages.success(request, 'Ďakujeme za registráciu! Budeme vás informovať o ďalších krokoch.')
            
        elif form_type == 'contact':
            name = request.POST.get('name')
            email = request.POST.get('email')
            subject = request.POST.get('subject')
            message = request.POST.get('message')
            
            # TODO: Add logic to send email
            messages.success(request, 'Ďakujeme za správu! Ozveme sa vám čo najskôr.')
            
        return redirect(request.path + '#' + form_type)
        
    return render(request, 'index.html')

def sponsors(request):
    return render(request, 'sponsors.html')

def sponsors_post(request):
    if request.method == 'POST':
        # Get form data
        company = request.POST.get('company')
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Compose email message
        email_subject = f'Nová žiadosť o partnerstvo od {company}'
        email_message = f"""
        Detaily žiadosti o partnerstvo:
        
        Spoločnosť: {company}
        Kontaktná osoba: {name}
        Email: {email}
        
        Správa:
        {message}
        """
        
        try:
            # Send email
            send_mail(
                email_subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],  # You'll need to set this in settings.py
                fail_silently=False,
            )
            messages.success(request, 'Vaša žiadosť bola úspešne odoslaná. Čoskoro vás budeme kontaktovať.')
            return redirect('sponsors')
        except Exception as e:
            messages.error(request, 'Nastala chyba pri odosielaní žiadosti. Prosím, skúste to znova neskôr.')
    
    return render(request, 'sponsors.html')