# Generated by Django 5.0 on 2024-01-19 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eCommerce', '0002_paymentvnpay'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymentvnpay',
            name='order_id',
            field=models.BigIntegerField(blank=True, default=0, null=True),
        ),
    ]
